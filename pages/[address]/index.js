import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NFTE } from "@nfte/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import web3 from "./../../containers/web3";

const NFTGallery = () => {
  const router = useRouter();
  const { zora } = web3.useContainer();
  const { address } = router.query;
  const [tokenIds, setTokenIds] = useState([]);

  console.log(tokenIds);

  const mediaIds = async () => {
    console.log(zora);
    if (zora) {
      let balance = await zora.fetchBalanceOf(address);
      balance = parseInt(balance);
      console.log(balance);
      for (let i = 0; i < balance; i++) {
        const mediaId = await zora.fetchMediaOfOwnerByIndex(address, i);
        setTokenIds([...tokenIds, mediaId]);
      }
    }
  };

  useEffect(() => {
    mediaIds();
  }, []);

  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="container mx-auto">
        <div className="w-8/12 mb-48">
          <h1 className="mt-32 font-bold text-4xl">
            Any NFTs you have minted will be shown here.
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {/* <NFTE
          contract="0x7C2668BD0D3c050703CEcC956C11Bd520c26f7d4"
          tokenId="2019"
        />
                <NFTE
          contract="0x7C2668BD0D3c050703CEcC956C11Bd520c26f7d4"
          tokenId="2020"
        /> */}
        {/* map over all token ids/addresses owned by this address */}
        {/* on hover make item bigger */}
      </div>
      <Footer />
    </div>
  );
};

export default NFTGallery;
