import Image from "next/image";
import Link from "next/link";
const Whatsapp = () => {
  return (
    <div className="fixed z-20 bottom-2 right-2 sm:bottom-5 sm:right-5 xl:bottom-10 xl:right-10 flex items-center gap-1 md:gap-4">
      <p className="hidden md:flex border rounded-xl py-1 px-2 bg-white">
        For free sample, contact our whatsapp
      </p>
      <p className="md:hidden border rounded-xl py-1 px-2 bg-white">
        {`Free sample >>`}
      </p>
      <a
        href="https://wa.me/6281233358878"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <div className="relative h-16 w-16">
          <Image
            className="object-contain cursor-pointer"
            src="/icons/whatsapp_action.svg"
            alt="whatsapp floating icon"
            layout="fill"
          ></Image>
        </div>
      </a>
    </div>
  );
};

export default Whatsapp;
