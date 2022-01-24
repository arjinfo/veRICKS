# RICKS (Recurrently Issued Collectively Kept Shards)

RICKS fractionalizes an NFT (erc721) into shards (erc20), the protocol then mints new shards at a constant rate an auctions them. The auction proceeds are distributed to RICKS holders

RICKS ensure shards can be converted back into underlying NFT.


## RICKS(ve(3,3) NFT) -- applying RICKS to NFT

* Initialization
  1. setParameters (parameters can change over lifespan of RICKS)
    
      an example of parameters for coordinating auctions with voting schedule:

      - `auctionLength`   = 12hrs
      - `auctionInterval` = 1 week 
      - `weeklyInflation` = low

      Early on, set weeklyInflation high at start with decay so NFT acquires more `token`. 
  1. ve(3,3) NFT sent to RICKS contract from veDAO multisig
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
  1. Stakers can increase their RICKS allocation by working in veDAO's interest 
     * `token` acquisition
       * Encourage users to stake liquidity to acquire `token`
       * incentivize `token` deposit with vePTP style tokenomics for shard distribution
  1. Stakers can exit by liquidity pool

### The RICKS flywheel (WIP)

RICKS enables allows for distribution of 
`voting` -> `token` -> `auction distribution`

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



## Glossery
- `token`: The token earned from the solidly protocol
- `ve`: The locked token
