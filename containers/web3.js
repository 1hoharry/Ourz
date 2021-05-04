import {
  Zora,
  constructMediaData,
  sha256FromBuffer,
  generateMetadata,
  constructBidShares,
  signPermitMessage,
} from "@zoralabs/zdk";
import { generatedWallets } from "@zoralabs/core/dist/utils";
import axios from "axios";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../ethereum/abis/OurzPaymentSplitterFactory.json";
//import { abi } from "../ethereum/abis/Media.json"
//import { abi } from "../ethereum/abis/Market.json"

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.INFURA_ID,
    },
  },
};

// local blockchain
//const wallet = Wallet.createRandom()
//const zora = new Zora(wallet, 50, Media.deployed(), Market.deployed())
//await zora.totalSupply()

function useWeb3() {
  const [zora, setZora] = useState(null);
  const [modal, setModal] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const setupWeb3Modal = () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: providerOptions,
    });

    setModal(web3Modal);
  };

  const authenticate = async () => {
    const web3Provider = await modal.connect();
    await web3Provider.enable();

    const provider = new providers.Web3Provider(web3Provider);
    setProvider(provider);

    const network = await provider.getNetwork();
    setNetwork(network);
    const signer = provider.getSigner();
    setSigner(signer);
    const address = await signer.getAddress();
    setAddress(address);

    const zora = new Zora(signer, network.chainId);
    setZora(zora);
  };

  const disconnect = async () => {
    if (provider.close) {
      await provider.close();
    }
    await modal.clearCachedProvider();
    setProvider(null);
    setNetwork(null);
    setAddress(null);
  };

  const getFileBuffer = async (file) => {
    return new Promise((res, rej) => {
      let reader = new FileReader();

      reader.addEventListener("loadend", (e) => res(e.target.result));
      reader.addEventListener("error", rej);

      reader.readAsArrayBuffer(file);
    });
  };

  const createEipSig = async (contract) => {
    // const [wallet] = generatedWallets(provider);
    const [wallet] = generatedWallets(contract);
    const deadline = Math.floor(new Date().getTime() / 1000) + 60 * 60 * 24;
    const domain = zora.eip712Domain();
    const eipSig = await signPermitMessage(
      wallet,
      address,
      0,
      0,
      deadline,
      domain
    );
    return eipSig;
  };

  const mintMedia = async (media, name, description, royalty, royalties) => {
    console.log(royalties);
    const metadataJSON = generateMetadata("zora-20210101", {
      description: description,
      mimeType: media.type,
      name: name,
      version: "zora-20210101",
    });

    const mediaBuffer = await getFileBuffer(media);

    const contentHash = sha256FromBuffer(Buffer.from(mediaBuffer));
    const metadataHash = sha256FromBuffer(Buffer.from(metadataJSON));

    let formData = new FormData();
    formData.append("media", media);
    formData.append("name", name);
    formData.append("metadata", metadataJSON);

    const upload = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    const { mediaCID, metadataCID } = upload.data;
    const mediaUrl = `https://${mediaCID}.ipfs.dweb.link`;
    const metadataUrl = `https://${metadataCID}.ipfs.dweb.link`;

    const mediaData = constructMediaData(
      mediaUrl,
      metadataUrl,
      contentHash,
      metadataHash
    );

    const bidShares = constructBidShares(
      parseInt(royalty),
      100 - parseInt(royalty),
      0
    );

    const tx = await zora.mint(mediaData, bidShares);
    await tx.wait(1);

    //   const factory = await new ethers.Contract(
    //     "0xbdFBbB1aBA2C5b3C3038219C5FBf70556bcCd300",
    //     abi,
    //     signer
    //   );

    //   const collaborators = [];
    //   const shares = [];

    //   for (let i = 0; i < royalties.length; i++) {
    //     collaborators.push(royalties[i].collaborator);
    //     shares.push(royalties[i].shares);
    //   }

    //   await factory.createOurzPaymentSplitter(collaborators, shares);
    //   const paymentSplitterContracts = await factory.getOurzPaymentSplittersByCollaborator(
    //     collaborators[0]
    //   );
    //   console.log(paymentSplitterContracts);
    //   const newestContract =
    //     paymentSplitterContracts[paymentSplitterContracts.length - 1];

    //   const eipSig = await createEipSig(newestContract);
    //   console.log(eipSig);
    //   const tx = await zora.mintWithSig(
    //     address,
    //     mediaData,
    //     bidShares,
    //     eipSig
    //   );
    //   await tx.wait(1);
  };



  // On load events
  useEffect(setupWeb3Modal, []);

  return {
    address,
    mintMedia,
    authenticate,
    disconnect,
    zora,
  };
}

const web3 = createContainer(useWeb3);
export default web3;
