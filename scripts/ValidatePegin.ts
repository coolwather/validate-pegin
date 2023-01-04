import { HardhatRuntimeEnvironment } from "hardhat/types";

const hre: HardhatRuntimeEnvironment = require("hardhat");
const contractAddress = "0x0e19674ebc2c2B6Df3e7a1417c49b50235c61924";

async function main() {
    console.log(`Getting Deployed contract at ${contractAddress}`);

    const signers = await hre.ethers.getSigners();
    
    const contract = await hre.ethers.getContractAt("PeginTest", contractAddress, signers[0]);
    const balance = await hre.ethers.provider.getBalance(contract.address);
    console.log(`Contract balance ${balance}`);
}

main().catch(error => {
    console.log(error);
});
