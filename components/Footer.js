import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 min-w-full border-t">
      <div className="container flex justify-between items-center mx-auto py-12">
        <div>
          <p className="font-bold">
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
        <h3 className="font-bold">© Ourz 2021</h3>
      </div>
    </div>
  );
  };

export default Footer;
