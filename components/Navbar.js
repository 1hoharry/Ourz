import Link from "next/link";
import web3 from "./../containers/web3";
import Wallet from "./Wallet";

const Navbar = () => {
  const { address } = web3.useContainer();

  return (
    <div className="container flex justify-between items-center p-5 mx-auto border-b">
      <Link href="/">
        <a className="font-bold text-4xl hover:text-gray-500 transition duration-200">
          OURZ
        </a>
      </Link>
      {address && (
        <Link href={`/${address}`}>
          <a className="font-bold text-2xl text-center">Your Creations</a>
        </Link>
      )}
      <div className="flex items-center">
        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
