import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NFTGallery = () => {
  const router = useRouter();
  const { address } = router.query;

  return (
    <div className="relative pb-96">
      <Navbar />
      <h3 className="mt-10 font-bold text-2xl text-center">your NFTs</h3>
      <div className="grid grid-cols-4 gap-10">
          {/* map over all token ids/addresses owned by this address */}
          {/* on hover make item bigger */}
      </div>
      <Footer />
    </div>
  );
};

export default NFTGallery;
