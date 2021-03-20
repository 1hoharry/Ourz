import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="relative pb-96">
      <Navbar />
      <div className="container mx-auto">
        <div className="w-8/12 mb-48">
          <h1 className="mt-32 font-bold text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <h3 className="mt-5 font-bold text-xl text-gray-500">
            Rhoncus urna neque viverra justo nec ultrices.
          </h3>
        </div>
        <Card
          header="$1.3B+"
          text="Invested through our platform"
          add="Since May 2020"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
