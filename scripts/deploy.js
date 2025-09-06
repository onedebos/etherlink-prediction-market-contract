// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  // Get the deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  // Compile & get the contract factory
  const MyToken = await ethers.getContractFactory("PredictxtzContract");

  // Deploy the contract
  const token = await MyToken.deploy();
  await token.deployed();

  console.log("Contract deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
