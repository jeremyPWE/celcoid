import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div className="z-0 aspect-w-16 aspect-h-9 flex">
        <video loop autoPlay="true" preload="auto" muted playsInline>
          <source src="/vid/hero-vid.mp4" type="video/mp4" />
        </video>
        <div className="text-bwhite flex flex-col justify-center items-center bg-layer">
          <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h2 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl">
              Supplying across the globe
            </h2>
            <h1 className="sm:pt-3 sm:pb-12 text-2xl sm:text-4xl md:text-6xl xl:text-8xl pb-6">
              The Leading Coconut Products Manufacturers
            </h1>
            <Link href="#contact-us" passHref>
              <button
                type="button"
                className="inline-flex justify-center py-2 px-7 sm:py-4 sm:px-12 border border-transparent shadow text-base sm:text-xl font-medium text-white bg-ringfocus hover:bg-primeText"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
