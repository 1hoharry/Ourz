import Link from "next/link";
import Wallet from "./Wallet";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center p-5 mx-auto border-b">
      <Link href="/">
        <a className="font-bold text-2xl hover:text-gray-500 transition duration-200">
          Ourz
        </a>
      </Link>
      <div className="flex items-center">
        <Link href="/">
          <a className="font-bold mr-10 hover:text-gray-500 transition duration-200">
            Docs
          </a>
        </Link>
        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
