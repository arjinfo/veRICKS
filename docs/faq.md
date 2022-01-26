# FAQ

## Q What is a veRICKS auction?

### A

A user bids on a veRICKS shards via an auction by placing a smart contract call to the [veRICKS contract](../contracts/veRICKS.sol). Users have two avenues by which they can get `token` to purchase shards.

- Option 1: Users can provide liquidity in Solidly pools (BaseV1Pair), staking their LP tokens on that pool; trading their lp fees for `token`
- Option 2: Since `token` (ERC-20) is transferable, it will have liquidity on some DEX, meaning the veRICKS user could buy `token` on an exchange without providing liquidity.

**Note**, an individual selling shards does so on a DEX. The veRICKS protocol is the only entity that sells shards via auction.

