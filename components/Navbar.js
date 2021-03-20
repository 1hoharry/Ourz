import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import Wallet from "./Wallet";

const Navbar = () => {
  const { account, active } = useWeb3React();

  return (
    <div className="container flex justify-between items-center p-5 mx-auto border-b">
      <Link href="/">
        <a className="font-bold text-2xl hover:text-gray-500 transition duration-200">
          Ourz
        </a>
      </Link>
      {active && (
        <Link href={`/${account}`}>
          <a className="font-bold text-2xl text-center">your NFTs</a>
        </Link>
      )}
      <div className="flex items-center">
        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
