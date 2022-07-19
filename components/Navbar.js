import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="h-16 sticky top-0 z-30 flex items-center justify-center w-full"
      role="navigation"
    >
      <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref>
            <a className="flex items-center gap-1">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/logo-mini.png"
                alt="celco-logo"
                width={30}
                height={30}
              />
              <h3>CELCO</h3>
            </a>
          </Link>
        </div>

        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="md:flex hidden space-x-10 items-center">
          <Link className="p-4" href="/" passHref>
            <a className="hover:font-semibold active:font-semibold">Home</a>
          </Link>
          <Link className="p-4" href="/our-product" passHref>
            <a className="hover:font-semibold active:font-semibold">Product</a>
          </Link>
          <Link className="p-4" href="/shipping" passHref>
            <a className="hover:font-semibold active:font-semibold">Shipping</a>
          </Link>
          <Link className="p-4" href="/about-us" passHref>
            <a className="hover:font-semibold active:font-semibold">About us</a>
          </Link>
          <Link className="p-4" href="/#contact-us" passHref>
            <a className="hover:font-semibold active:font-semibold">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
