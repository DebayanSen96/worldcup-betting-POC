import * as dotenv from "dotenv";
import { ethers } from "ethers";

dotenv.config();

const WORLD_CUP_BETTING_ADDRESS = "0xdc756B402Dfe27B090f294c35C5492C9cbCa9fa6";
const DEFAULT_SEPOLIA_RPC_URL = "https://ethereum-sepolia-rpc.publicnode.com";
const STAKE = ethers.parseEther("0.001");
const RESOLUTION_DELAY_SECONDS = 75;

const WORLD_CUP_BETTING_ABI = [
  "function createMarket(string,string,string[],uint256,address,address) external returns (uint256)",
  "function placeBet(uint256,uint256,uint256,uint256) external payable returns (uint256)",
  "function resolveMarket(uint256,uint256) external",
  "function claimWinnings(uint256) external",
  "function marketCount() view returns (uint256)",
  "function betCount() view returns (uint256)",
  "function getMarket(uint256) view returns (uint256 id,string question,string description,string[] outcomes,uint256 resolutionTime,address arbitrator,address creator,uint8 status,uint256 totalVolume,address tokenAddress)",
  "function getAvailableFees(address) view returns (uint256)",
  "function reputationSystem() view returns (address)",
];

function requirePrivateKey() {
  if (!process.env.PRIVATE_KEY) {
    throw new Error(
      [
        "PRIVATE_KEY is required in contracts/.env or the shell environment.",
        "Use any funded Sepolia wallet. The deployed contract owner key is not required.",
      ].join(" ")
    );
  }

  return process.env.PRIVATE_KEY;
}

async function waitUntilResolution(provider: ethers.JsonRpcProvider, resolutionTime: bigint) {
  while (true) {
    const block = await provider.getBlock("latest");
    if (!block) {
      throw new Error("Unable to read latest Sepolia block");
    }

    if (BigInt(block.timestamp) >= resolutionTime) {
      return;
    }

    const secondsLeft = Number(resolutionTime - BigInt(block.timestamp));
    console.log(`Waiting ${secondsLeft}s for resolution time...`);
    await new Promise((resolve) => setTimeout(resolve, Math.min(secondsLeft, 10) * 1000));
  }
}

async function main() {
  const rpcUrl = process.env.SEPOLIA_RPC_URL || DEFAULT_SEPOLIA_RPC_URL;
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(requirePrivateKey(), provider);
  const market = new ethers.Contract(WORLD_CUP_BETTING_ADDRESS, WORLD_CUP_BETTING_ABI, wallet);

  const code = await provider.getCode(WORLD_CUP_BETTING_ADDRESS);
  if (code === "0x") {
    throw new Error(`No contract bytecode found at ${WORLD_CUP_BETTING_ADDRESS} on Sepolia`);
  }

  const balance = await provider.getBalance(wallet.address);
  if (balance < ethers.parseEther("0.01")) {
    console.warn(
      `Wallet balance is ${ethers.formatEther(balance)} ETH. The smoke test may need more Sepolia ETH.`
    );
  }

  const feeData = await provider.getFeeData();
  const gas = {
    maxFeePerGas: feeData.maxFeePerGas ? feeData.maxFeePerGas * 2n : undefined,
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas ? feeData.maxPriorityFeePerGas * 2n : undefined,
  };

  console.log("WorldCupBetting:", WORLD_CUP_BETTING_ADDRESS);
  console.log("Runner wallet:", wallet.address);
  console.log("ReputationSystem:", await market.reputationSystem());
  console.log("Starting marketCount:", (await market.marketCount()).toString());

  const latestBlock = await provider.getBlock("latest");
  if (!latestBlock) {
    throw new Error("Unable to read latest Sepolia block");
  }

  const resolutionTime = BigInt(latestBlock.timestamp + RESOLUTION_DELAY_SECONDS);
  const createTx = await market.createMarket(
    "World Cup smoke test: home side wins?",
    "Live Sepolia smoke test market",
    ["YES", "NO"],
    resolutionTime,
    wallet.address,
    ethers.ZeroAddress,
    gas
  );
  console.log("createMarket tx:", createTx.hash);
  await createTx.wait();

  const marketId = await market.marketCount();
  console.log("Created marketId:", marketId.toString());

  const betTx = await market.placeBet(marketId, 0, STAKE, 0, { ...gas, value: STAKE });
  console.log("placeBet tx:", betTx.hash);
  await betTx.wait();

  const betId = await market.betCount();
  console.log("Created betId:", betId.toString());

  await waitUntilResolution(provider, resolutionTime);

  const resolveTx = await market.resolveMarket(marketId, 0, gas);
  console.log("resolveMarket tx:", resolveTx.hash);
  await resolveTx.wait();

  const claimTx = await market.claimWinnings(betId, gas);
  console.log("claimWinnings tx:", claimTx.hash);
  await claimTx.wait();

  const resolvedMarket = await market.getMarket(marketId);
  const availableFees = await market.getAvailableFees(ethers.ZeroAddress);
  console.log("Final market status:", resolvedMarket.status.toString());
  console.log("Available ETH fees:", ethers.formatEther(availableFees));
  console.log("Live Sepolia smoke test completed.");
}

main().catch((error) => {
  console.error(error.message || error);
  process.exitCode = 1;
});
