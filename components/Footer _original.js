import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 min-w-full border-t">
      <div className="container flex justify-between items-center mx-auto py-12">
        <div>
          <Link href="/">
            <a className="mr-10 text-gray-600 underline hover:text-gray-400 transition duration-200">FAQ</a>
          </Link>
          <Link href="/">
            <a className="text-gray-600 underline hover:text-gray-400 transition duration-200">Docs</a>
          </Link>
        </div>
        <h3 className="font-bold text-gray-400">© Ourz 2021</h3>
      </div>
    </div>
  );
};

export default Footer;