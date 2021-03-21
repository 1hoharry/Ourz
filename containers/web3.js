import {
  Zora,
  constructMediaData,
  sha256FromBuffer,
  generateMetadata,
  constructBidShares,
} from "@zoralabs/zdk";
import axios from "axios";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { abi } from "../ethereum/abis/OurzPaymentSplitterFactory.json";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.INFURA_ID,
    },
  },
};

function useWeb3() {
  const [zora, setZora] = useState(null);
  const [modal, setModal] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [provider, setProvider] = useState(null);

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
    const address = await signer.getAddress();
    setAddress(address);

    // const zora = new Zora(signer, network.chainId);
    // setZora(zora);
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

  const mintMedia = async (media, name, description, royalty, royalties) => {
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
    const mediaUrl = `ipfs://${mediaCID}`;
    const metadataUrl = `ipfs://${metadataCID}`;

    const mediaData = constructMediaData(
      mediaUrl,
      metadataUrl,
      contentHash,
      metadataHash
    );

    const bidShares = constructBidShares(
      parseInt(royalty),
      100 - parseInt(royalty),
      parseFloat(fee)
    );

    const factory = await new ethers.Contract(
      "0x61fd693d11daf48333fe1a9a30ac68936f4257df",
      abi,
      provider
    );


    // // Make transaction
    // const tx = await zora.mint(mediaData, bidShares);
    // await tx.wait(1); // Wait 1 confirmation and throw user to next screen
  };

  // On load events
  useEffect(setupWeb3Modal, []);

  return {
    address,
    mintMedia,
    authenticate,
    disconnect,
  };
}

const web3 = createContainer(useWeb3);
export default web3;
