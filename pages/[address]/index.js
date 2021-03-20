import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const NFTGallery = () => {
  const router = useRouter();
  const { address } = router.query;

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
          {/* map over all token ids/addresses owned by this address */}
          {/* on hover make item bigger */}
      </div>
      <Footer />
    </div>
  );
};

export default NFTGallery;
