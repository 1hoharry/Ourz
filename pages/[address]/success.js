import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Success = () => {
  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="container mx-auto">
        <div className="w-8/12 mb-48">
          <h1 className="mt-32 font-bold text-4xl">
            <p>Mint Successful</p>
          </h1>
          <h3 className="mt-5 font-bold text-xl text-gray-500">
            <p>The media should be available on the homepage soon.</p>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
