import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../hooks";

const Wallet = () => {
  const { account, activate } = useWeb3React();

  const handleClick = () => {
    activate(injected);
  };

  return account ? (
    <Link href={`/${account}/mint`}>
      <a className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200">
        Mint
      </a>
    </Link>
  ) : (
    <button
      className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200"
      onClick={handleClick}
    >
      Connect Wallet
    </button>
  );
};

export default Wallet;
