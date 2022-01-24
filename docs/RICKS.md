# RICKS (Recurrently Issued Collectively Kept Shards) fractionalizes an NFT (erc721) into shards (erc20). 

RICKS protocol then mints new shards at a constant rate and auctions them to the public. The auction proceeds are distributed to RICKS holders.

Q: Where does a RICKS auction take place? "in the smart contract" 
A: A user bids on a RICKS auction via a smart contract call on Fantom. This is the ___ contract. 
- People buy the shards with Solidly `token`. How does the user get `token`? 
  - Option 1: The user would have to provide liquidity on Fantom in a Solidly-compatible pool (BaseV1Pair), stake their LP tokens on that pool, and get `token` from the Solidly Protocol.
  - Option 2: Since `token` (ERC-20) is transferable, it will have liquidity on some DEX, meaning the RICKS user could buy `token` on an exchange without providing liquidity. 

**Note**, an individual selling shards does so on a DEX. The RICKS protocol is the only entity that sells shards via auction.

# RICKS that ensure shards can be converted back into underlying NFT.

Suppose our user is holding RICKS shards. I have two options: (1) Stake the shards to get additional emission rewards. (2) Sell shards on a DEX to cash out.

There's a problem with the second point. Currently, there's no specific liquidity pool to sell the RICKS shards. We (veDAO) can either build something, partner, or factory a  liquidity pool up permissionlessly on an existing AMM.
- Places that we can list liquidity pools on Fantom: SpiritSwap, SpookySwap,  SushiSwap, CrocSwap? (doesn't exist on FTM yet),



<!-- Where can I sell the shards? -> A liquidity pool -> What liquidity pool? -> BUIDL -->




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



## Glossary

- `token`: The token earned from the solidly protocol
- `ve`: The locked token
