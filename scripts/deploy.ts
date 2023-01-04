import { ethers } from "hardhat";

async function main() {
  const PeginTest = await ethers.getContractFactory("PeginTest");
  const peginTest = await PeginTest.deploy();

  await peginTest.deployed();

  console.log(`PeginTest deployed to ${peginTest.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
