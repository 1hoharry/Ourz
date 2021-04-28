import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="relative pb-96">
      <Navbar className="navbar" />
      <div className="container mx-auto">
        <div className="mb-50">
          <h1 className="text-center mt-32 font-bold text-6xl pb-2 tracking-wide">
            <p>
              OURZ
            </p>
          </h1>
          <h2 className="text-center">
            <p className="font-bold text-3x1 pb-20 tracking-widest">
              Because Art Is Collaborative
            </p>
            <p className="pb-4">
              We built this website so artists (and any co-creators) can mint NFTs, <br></br> split royalties, and display them on their own websites.
            </p>
            <p className="font-bold text-sm">
              Coming Soon <sup>TM</sup>
            </p>
          </h2>
        </div>
        {/*/*<Card
          header="~10 NFTs"
          text="Minted on OURZ"
          add="Since March 2021"
        />*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
