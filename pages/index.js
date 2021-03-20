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
            <p>
              Welcome to OURZ.art
            </p>
            <p>
              We built this website so artists (and any co-creators) can mint NFTs, split royalties, and display them on their own websites.
            </p>
          </h1>
          <h3 className="mt-5 font-bold text-xl text-gray-500">
            <p>
              <em>Empowering artists, and their collaborators.</em>
            </p>
            <p>
              <em>Built on ZORA.</em>
            </p>
          </h3>
        </div>
        <Card
          header="~10 NFTs"
          text="Minted on OURZ"
          add="Since March 2021"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
