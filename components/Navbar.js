import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center p-5 mx-auto border-b">
      <Link href="/">
        <a className="font-bold text-2xl hover:text-gray-500 transition duration-200">
          Ourz
        </a>
      </Link>
      <div>
        <Link href="/">
          <a className="font-bold mr-10 hover:text-gray-500 transition duration-200">
            Docs
          </a>
        </Link>
        <button className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
