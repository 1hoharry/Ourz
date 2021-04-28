import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 min-w-full h-50 pb-50 border-t">
      <div className="container flex justify-between py-12 items-center text-gray-500 mx-auto">
        <div className="mt-5 font-bold">
          <p>
            Empowering artists, and their collaborators.
            <br></br>
            <em>Built on <a className="underline" href="https://zora.co/" alt="www.zora.co">Zora Protocol</a>.</em>
          </p>
        </div>
        {/*<div>
          <Link href="/">
            <a className="mr-10 text-gray-600 underline hover:text-gray-400 transition duration-200">FAQ</a>
          </Link>
          <Link href="/">
            <a className="text-gray-600 underline hover:text-gray-400 transition duration-200">Docs</a>
          </Link>
        </div>*/}
        <h3 className="font-bold text-gray-300">© Ourz 2021</h3>
      </div>
    </div>
  );
  };

export default Footer;
