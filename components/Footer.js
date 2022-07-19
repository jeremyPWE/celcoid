import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <div className="flex justify-center w-full bg-dark py-10 md:pt-12 md:pb-20">
      <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl text-thirdText">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="hidden md:flex flex-col">
            <h3 className="text-aqua font-bold pb-2">CELCO</h3>
            <div className="flex flex-col gap-1">
              <p>Romokalisari Fortune Mate D-18</p>
              <p>Jawa Timur, Indonesia</p>
              <p>+62 812-3335-8878</p>
              <p>celco.samb@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <h3 className="text-aqua font-bold pb-2">QUICK LINKS</h3>
              <div className="flex flex-col gap-1">
                <Link href="/" passHref>
                  <a className="hover:font-bold">Home</a>
                </Link>
                <Link href="/our-product" passHref>
                  <a className="hover:font-bold">Product</a>
                </Link>
                <Link href="/shipping" passHref>
                  <a className="hover:font-bold">Shipping</a>
                </Link>
                <Link href="/about-us" passHref>
                  <a className="hover:font-bold">About</a>
                </Link>
                <Link href="/#contact-us" passHref>
                  <a className="hover:font-bold">Contact</a>
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col">
              <h3 className="text-aqua font-bold pb-2">SOCIAL MEDIA</h3>
              <div className="flex flex-col gap-1">
                <a
                  className="hover:font-bold"
                  href="https://business.facebook.com/celco.id/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  className="hover:font-bold"
                  href="https://www.linkedin.com/company/celco-indonesia/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:font-bold"
                  href="https://wa.me/6281233358878"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-aqua font-bold pb-2">SUPPORTED BY</h3>
              <div className="flex flex-col gap-1">
                <div className="relative h-12 w-12 xl:h-14 xl:w-14">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/support1.png"
                    alt="bea cukai makassa maraga logo"
                    layout="fill"
                  ></Image>
                </div>
                <div className="relative h-12 w-56 xl:h-14 xl:w-64">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/support2.png"
                    alt="dinas koperasi dan ukm kota makassar logo"
                    layout="fill"
                  ></Image>
                </div>
                <div className="relative h-12 w-44 xl:h-14 xl:w-52">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/support3.png"
                    alt="bank indonesia logo"
                    layout="fill"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <h3 className="text-aqua font-bold pb-2">SOCIAL MEDIA</h3>
            <div className="flex flex-row gap-5">
              <a
                href="https://business.facebook.com/celco.id/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <div className="relative h-9 w-9">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/facebook.svg"
                    alt="facebook icon"
                    layout="fill"
                  ></Image>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/celco-indonesia/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <div className="relative h-9 w-9">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/linkedin.svg"
                    alt="linkedin icon"
                    layout="fill"
                  ></Image>
                </div>
              </a>
              <a
                href="https://wa.me/6287781229189"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <div className="relative h-9 w-9">
                  <Image
                    className="object-contain cursor-pointer"
                    src="/icons/whatsapp.svg"
                    alt="whatsapp icon"
                    layout="fill"
                  ></Image>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
