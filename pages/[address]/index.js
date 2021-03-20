import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NFTGallery = () => {
  const router = useRouter();
  const { galleryData, setGalleryData } = useState([]);
  const { chainId } = useWeb3React();
  const { address } = router.query;

  const getNFTGalleryData = async () => {
    const data = await axios.get(`/api/${address}`, {
      params: { chainId },
    });
    console.log(data);
  };

  useEffect(() => {
    if (address && chainId) getNFTGalleryData();
  }, [address, chainId]);

  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="grid grid-cols-4 gap-10">
        {/* map over all token ids/addresses owned by this address */}
        {/* on hover make item bigger */}
      </div>
      <Footer />
    </div>
  );
};

export default NFTGallery;
