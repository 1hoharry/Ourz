const express = require("express");
const { ethers } = require("ethers");
const { Zora } = require("@zoralabs/zdk");
const app = express();

const { PORT, INFURA_PROJECT_ID, INFURA_PROJECT_KEY } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const CHAIN_ID_TO_NETWORK = {
  1: "homestead",
  4: "rinkeby",
  42: "kovan",
};

// example to call zora
const getBalance = async (address, chainId) => {
  console.log(chainId);
  const infuraProvider = new ethers.providers.InfuraProvider(
    CHAIN_ID_TO_NETWORK[chainId],
    {
      projectId: INFURA_PROJECT_ID,
      projectSecret: INFURA_PROJECT_KEY,
    }
  );
  const zora = new Zora(infuraProvider, parseInt(chainId));
  const balance = await zora.fetchBalanceOf(address);
  return balance;
};

app
  .route("/api/:address")
  .get(async (req, res) => {
    const { address } = req.params;
    const { chainId } = req.query;
  })
  .post(async (req, res) => {
    const { address } = req.params;
    const { chainId, privateKey } = req.query;
  });