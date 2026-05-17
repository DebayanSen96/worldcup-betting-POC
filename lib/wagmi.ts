import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
  "00000000000000000000000000000000";

export const config = getDefaultConfig({
  appName: "Prediction Market",
  projectId: walletConnectProjectId,
  chains: [sepolia],
  ssr: true,
});
