import Link from "next/link";
import web3 from "./../containers/web3";
import Wallet from "./Wallet";

const Navbar = () => {
  const { address } = web3.useContainer();

  return (
    <div className="sticky top-0 container flex justify-between items-center p-5 mx-auto border-b bg-opacity-90">
      <Link href="/">
        <a className="logo" /*className="font-bold text-4xl hover:text-gray-500 transition duration-200"*/>
          OURZ
        </a>
      </Link>
      {/*<ul className="nav__links">
        <li><a href="#">About</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
      </ul> */}
      {address && (
        <Link href={`/${address}`}>
          <a className="nav__links" /*font-bold text-2xl text-center*/>Your Creations</a>
        </Link>
      )}
      <div className="nav__links"/*flex items-center*/>
        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
