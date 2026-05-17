# Submission Notes

## Implemented contract

- `contracts/contracts/WorldCupBetting.sol`

## Deployed contract

- Network: Ethereum Sepolia
- WorldCupBetting: `0xdc756B402Dfe27B090f294c35C5492C9cbCa9fa6`
- ReputationSystem: `0xA4483bBAc9c55E18327C086039014eCdBE2C6ce1`

## Verification

```bash
npx hardhat test
```

Result:

```text
11 passing
```

## Notes

- Platform fees are charged only when winning positions claim. The winner receives their proportional pool payout minus the 2% fee, and the fee is tracked per collateral token for owner withdrawal.
- Secondary-market purchases transfer the bet owner to the buyer, so the buyer is the account allowed to claim after resolution.
