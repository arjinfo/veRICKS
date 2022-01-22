require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: `https://rpc.ankr.com/fantom`,
        blockNumber: 28687671
      }
    }
  }
};

