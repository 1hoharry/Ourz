import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col"> {/* main div, screen locks page containter to viewport */}
      <Navbar className="self-start"/> {/* navbar css should be added in-line. flex-wrap will make it so logo stacks on top of links for mobile */}
      <div className="h-auto mx-auto text-center pb-44 my-auto">{/* pb and my will probably need to be adjusted whenever head/foot is changed. or if someone knows how the hell to center this. if you remove the padding on bottom, y axis margin auto ignores footer but recognizes header idk why */}
        <div className="pb-10 font-bold">
          <h1 className="text-6xl pb-2 tracking-wide">
            <p>
              OURZ
            </p>
          </h1>
          <h2>
            <p className="text-3x1 tracking-widest">
              Because Art Is Collaborative
            </p>
          </h2>
        </div>
        <div>
          <h3>
            <p className="pb-2">
              We built this website so artists (and any co-creators) can mint NFTs, <br></br> split royalties, and display them on their own websites.
            </p>
            <p className="font-bold text-sm">
              Coming Soon <sup>TM</sup>
            </p>
          </h3>
        {/*/*<Card
          header="~10 NFTs"
          text="Minted on OURZ"
          add="Since March 2021"
        />*/}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
