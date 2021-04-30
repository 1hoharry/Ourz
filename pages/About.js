import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col"> {/* main div, screen locks page containter to viewport */}
      <Navbar className="self-start"/> {/* navbar css should be added in-line. flex-wrap will make it so logo stacks on top of links for mobile */}
      <div className="h-auto mx-auto text-center mt-14"> {/* pb and my will probably need to be adjusted whenever head/foot is changed. or if someone knows how the hell to center this. if you remove the padding on bottom, y axis margin auto ignores footer but recognizes header idk why */}
        <div className="pb-44 my-auto">
          <h1 className="text-5xl pb-6">
            Who, What, Why?
          </h1>
          <div className="h-auto max-w-screen-lg p-10 my-auto tex">
            <h2 className="text-3xl pb-2">
              The Vision
            </h2>
            <p className="pb-10 text-justify">
              <ol>
                <li>1) We are Artists, Collaborators, BUIDLers, Hackers. We like to work on things we love, things we like, with people we love and people we like and having fun together.</li>
                <li>2) While we have fun making art we want a sustainable way to continue this way of life. </li>
                <li>3) We want a platform to showcase our art in our own space, on our own terms and in our own way.</li>
                <li>4) NFTs is the vehicle we believe get us closer to our vision.</li>
                <li>5) OURZ is a platform that enables artists / collaborators to host and Mint their work.</li>
                <li>6) It enables sharing Royalties from sale or resale of NFTs with all the contributors, charities and seamlessly gets deposited in their ETH wallets ( or ENS identity).</li>
              </ol>
            </p>
            <h2 className="text-3xl pb-2">
              The Team
            </h2>
            <p className="tracking-tight pb-10">
              {/* add links and pics when time comes? */}
              Aheesh N.
              <br>
              </br>
              Harry H.
              <br>
              </br>
              Brahma S.
              <br>
              </br>
              Nick A.
              <br>
              </br>
            </p>
            <h2 className="text-3xl pb-2">
              Buitl With
            </h2>
            <p className="text-center pb-16">
              <ol>
                <li>-IPFS/ NFT.Storage: For media hosting.</li>
                <li>-OpenZeppelin: Openzeppelin standard contracts with PaymentSpliter capability.</li>
                <li>-Zora: Zora protocol for Minting NFT and setting up the marketplace for Genesis Sale or Resale.</li>
                <li>-Nfte.app: Helps embed the NFT on artists website.</li>
              </ol>
            </p>
            <p className="tracking-widest text-center font-extrabold">
              Born @ NFTHack.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;