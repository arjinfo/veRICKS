# NFTAuction

Rewards from the NFT are paid weekly.
These rewards need to be distributed to holders of RICKS.

## To build

Added functionality for RICKS:

- [ ] sell rewards to wFTM
- [ ] maxBid with rewards
- [ ] write conditional statement for distribution of rewards to veRICKS Protocol stakers.

### sell rewards

* call ```function getReward(address token) public```
* swap rewards

### maxBid

* Avoid reentrance bug
* bid on auction. The msg.value is the bid amount

### Distribution of rewards

Distribute of rewards by bidding on auction:
```
  if auction == success:
     distribute shards to veRICKS stakers (stakers recieve rewards, shares of NFT not diluted)
  else:
     distribute rewards (ve(3,3) token) to veRICKS stakers (stakers recieve min 2x rewards, shares of NFT are diluted)
```


