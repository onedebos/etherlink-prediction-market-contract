require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    etherlink: {
      url: "https://node.ghostnet.etherlink.com",
      chainId: 128123,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
