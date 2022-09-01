/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_KEY = "UKGfj9JRKJbcnWTctRJqC5QcCRGf1ae-";
const RINKEBY_PRIVATE_KEY =
  "dee449a6d08430d9fa6d1155aadf9adae5243b0248d086333bfec7e569ed93d8";
module.exports = {
  solidity: "0.8.9",

  networks: {
    ropsten: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`],
    },
  },
};
