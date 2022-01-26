# veRICKS are RICKS from another dimension

| Protocol | Fractionalization | Inflation mechanism | Buybacks | Purchase | Shard Rewards |
| --- | :---: | :---: | :---: | --- | :---: |
| RICKS  | ✅ | ✅ | ✅ | Buy NFTs with Ether. | ❌ | 
| veRICKS  | ✅ | ✅ | ✅ | Buy NFTs with ve(3,3) `token` | Shard rewards for staking with the veRICKS protocol on auctions after genesis |

## The veRICKS Protocol fractionalizes an NFT (ERC-721) into shards (ERC-20)

After this initial fractionalizing, the "voter escrow" Recurrently Issued Collectively Kept Shards (veRICKS) Protocol will continually mint new shards on a schedule and auction them to the public. The proceeds of these auctions are distributed to veRICKS (shard) holders.



# veRICKS Protocol ensures shards can be converted back into the corresponding NFT.

Suppose our user is holding veRICKS shards. I have two options: (1) Stake the shards to get additional emission rewards. (2) Sell shards on a DEX to cash out.

There's a problem with the second point. Currently, there's no specific liquidity pool to sell the veRICKS shards. We (veDAO) can either build something, partner, or factory a liquidity pool up permissionlessly on an existing AMM.
- Places that we can list liquidity pools on Fantom: SpiritSwap, SpookySwap,  SushiSwap, CrocSwap? (doesn't exist on FTM yet)



<!-- Where can I sell the shards? -> A liquidity pool -> What liquidity pool? -> BUIDL -->



## veRICKS(ve(3,3) NFT) -- applying veRICKS to NFT

* Initialization
  1. setParameters (parameters can change over lifespan of veRICKS)
    
      an example of parameters for coordinating auctions with voting schedule:

      - `auctionLength`   = 12hrs
      - `auctionInterval` = 1 week 
      - `weeklyInflation` = low

      Early on, set weeklyInflation high at start with decay so NFT acquires more `token`. 
  1. ve(3,3) NFT sent to veRICKS contract from veDAO multisig
  1. contract mints shards, shards sent to veDAO multisig
  1. shards distributed to VeWE holders (see below)
* NFT Operations
  1. Rewards Distribution
     1. NFT claims fees from gauges
     1. NFT bids all fees in auction to distribute value to stakers
        - If auction won, distribute shards to stakers
        - If auction lost; stakers earn rewards, (distribute tokens to stakers)?
  1. Gauge Voting
     - quants determine optimal token lockup scheduling
     - quants determine optimal pools for voting
* Staker Operations 
  1. Stakers can increase their veRICKS allocation by working in veDAO's interest 
     * `token` acquisition
       * Encourage users to stake liquidity to acquire `token`
       * incentivize `token` deposit with vePTP style tokenomics for shard distribution
  1. Stakers can exit by liquidity pool

### The veRICKS flywheel (WIP)


`voting` -> `token` -> `auction distribution`

`auction distribution` increases voting power and the cycle continues

### Shards Distribution

the ratio of the amount distributed to owner $= \frac{n d t v} {\sum_{i}{n_i d_i t_i v_i}}$

- diamond hands bonus (d)
  * constantly farmed never sold (need to define better)
  * bonus rate: xxx%
- time in pool (t)
  * calculate amount staked
  * bonus rate: xxx%
- skipped 0xDAO vamp attack (v)
  * bonus rate: xxx%
- amount of weve at snapshot (n)

## Glossary

- `token`: The token earned from the solidly protocol
- `ve`: The locked token
