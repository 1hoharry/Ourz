import Link from "next/link";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../hooks";

const Wallet = () => {
  const { account, activate, active, deactivate } = useWeb3React();
  const router = useRouter();

  const handleActivate = () => {
    activate(injected);
  };

  const handleDeactivate = () => {
    deactivate(injected);
    router.push("/");
  };

  return active ? (
    <div>
      <Link href={`/${account}/mint`}>
        <a className="mr-10 py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200">
          Mint
        </a>
      </Link>
      <button
        className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200"
        onClick={handleDeactivate}
      >
        Disconnect Wallet
      </button>
    </div>
  ) : (
    <button
      className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200"
      onClick={handleActivate}
    >
      Connect Wallet
    </button>
  );
};

export default Wallet;
