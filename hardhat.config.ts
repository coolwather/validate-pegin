import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    rskRegtest: {
      url: 'http://127.0.0.1:4444',
      chainId: 33,
    }
  }
};

export default config;
