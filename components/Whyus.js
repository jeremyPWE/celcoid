import Image from "next/image";

const Whyus = () => {
  return (
    <div className="flex justify-center w-full py-5 sm:py-10">
      <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-primeText text-center">
        <div className="flex flex-col items-center px-10 md:px-0">
          <h2 className="text-aqua">Why us?</h2>
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-5 lg:gap-10 pt-10 pb-5 sm:py-10 w-full">
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain"
                  src="/icons/organic.png"
                  alt="organic icon"
                  layout="fill"
                ></Image>
              </div>
              <div className="w-[270px] py-[20px]">
                <h3>100% ORGANIC MATERIALS</h3>
                <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                  Our products is purely made from 100% organic materials with
                  no chemical addition.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain"
                  src="/icons/worldbest.png"
                  alt="world best icon"
                  layout="fill"
                ></Image>
              </div>
              <div className="w-[270px] py-[20px]">
                <h3>WORLD BEST CHARCOALS</h3>
                <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                  Materials are 100% come from Indonesia, the best tropical
                  country for natural products.
                </p>
              </div>
            </div>
            <div className="items-center text-primeText flex flex-col">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain"
                  src="/icons/quality.png"
                  alt="commitment icon"
                  layout="fill"
                ></Image>
              </div>
              <div className="w-[270px] py-[20px]">
                <h3>Highest Quality</h3>
                <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                  With continous improvement and certified labs analysis, we
                  always try to create better products.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain"
                  src="/icons/international.png"
                  alt="international icon"
                  layout="fill"
                ></Image>
              </div>
              <div className="w-[270px] py-[20px]">
                <h3>INTERNATIONAL STANDARDS</h3>
                <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                  We are using international standard for product development
                  and quality process check up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
