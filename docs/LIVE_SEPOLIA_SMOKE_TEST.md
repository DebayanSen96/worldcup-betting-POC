# LIVE SEPOLIA SMOKE TEST

This repository includes a live smoke-test script for the deployed `WorldCupBetting` contract on Ethereum Sepolia.

## Deployed Contract

- WorldCupBetting: `0xdc756B402Dfe27B090f294c35C5492C9cbCa9fa6`
- Network: Ethereum Sepolia

## Who Can Run It

Any funded Sepolia wallet can run the script. The deployed contract owner key is not required.

The script creates a new market and sets the runner wallet as that market's arbitrator, then uses the same wallet to place a small ETH bet, resolve the market, and claim the winning payout.

## Environment

Create `contracts/.env` or provide these variables in the shell:

```env
PRIVATE_KEY=your_funded_sepolia_wallet_private_key
SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
```

`PRIVATE_KEY` is required. `SEPOLIA_RPC_URL` is optional because the script defaults to a public Sepolia RPC endpoint.

## Command

From the `contracts/` directory:

```bash
npm run smoke:sepolia
```

## Flow

The script performs this live sequence:

1. Confirms deployed bytecode exists at the hardcoded `WorldCupBetting` address.
2. Reads the linked `ReputationSystem` address and current `marketCount`.
3. Creates a fresh ETH market with a short resolution window.
4. Places a `0.001 ETH` bet on outcome `YES`.
5. Waits until the market can be resolved.
6. Resolves the market to outcome `YES`.
7. Claims winnings.
8. Logs final market status and accumulated ETH fees.

## Sample Output

```text
WorldCupBetting: 0xdc756B402Dfe27B090f294c35C5492C9cbCa9fa6
Runner wallet: 0x1234...
ReputationSystem: 0xA4483bBAc9c55E18327C086039014eCdBE2C6ce1
Starting marketCount: 1
createMarket tx: 0x...
Created marketId: 2
placeBet tx: 0x...
Created betId: 2
Waiting 64s for resolution time...
resolveMarket tx: 0x...
claimWinnings tx: 0x...
Final market status: 2
Available ETH fees: 0.00004
Live Sepolia smoke test completed.
```

## Notes

- The test uses real Sepolia ETH for gas and a `0.001 ETH` market stake.
- The final status value `2` corresponds to `MarketStatus.Resolved`.
- Platform fees increase after the winning claim because `WorldCupBetting` charges a 2% fee on winning payouts.
