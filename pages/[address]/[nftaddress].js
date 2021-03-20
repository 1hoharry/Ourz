import { useRouter } from "next/router";
import { NFTE } from "@nfte/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ViewNFT = () => {
  const router = useRouter();
  const { address } = router.query;
  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="mt-20 flex justify-center">
        <NFTE contract={address} tokenId="1" />
      </div>
      <Footer />
    </div>
  );
};

export default ViewNFT;
