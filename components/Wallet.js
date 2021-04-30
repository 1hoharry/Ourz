import Link from "next/link";
import { useRouter } from "next/router";
import web3 from "./../containers/web3";

const Wallet = () => {
  const router = useRouter();
  const { address, authenticate, disconnect } = web3.useContainer();
  console.log(address);

  const handleActivate = async () => {
    await authenticate();
  };

  const handleDeactivate = async () => {
    router.push("/");
    await disconnect();
  };

  return address ? (
    <div>
      <Link href={`/${address}/mint`}>
        <a className="createButton">
          {/*mr-10 py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200*/}
          Create
        </a>
      </Link>
      {/*<button
        className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200"
        onClick={handleDeactivate}
      >
        Disconnect Wallet
      </button>*/}
    </div>
  ) : (
    <button
      className="py-2 px-4 border rounded-lg bg-black font-bold text-white hover:ring-4 hover:ring-gray-600 transition duration-200 hidden md:block"
      onClick={handleActivate}
    >
      Connect Wallet
    </button>
  );
};

export default Wallet;
