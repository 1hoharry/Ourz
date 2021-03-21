const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config;

module.exports = {
  contracts_directory: "./ethereum/contracts",
  contracts_build_directory: "./ethereum/abis",
  migrations_directory: "./ethereum/migrations",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
    },
  },
};
