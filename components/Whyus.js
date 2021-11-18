import Image from "next/image";

const Whyus = () => {
  return (
    <div className="flex justify-center w-full py-5 sm:py-10">
      <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl text-primeText text-center">
        <div className="flex flex-col items-center px-10 md:px-0">
          <h2 className="text-aqua">Why us?</h2>
          <div className="flex gap-10 sm:gap-12 lg:gap-32 pt-5 sm:pt-10 pb-5 sm:py-10 w-full">
            <div className="flex flex-col items-center text-primeText w-1/2 sm:w-1/3">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/integrity.png"
                  alt="integrity icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Integrity</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We uphold honesty, openness and give the best services to our
                customers{" "}
              </p>
            </div>
            <div className="flex flex-col items-center text-primeText w-1/2 sm:w-1/3">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/quality.png"
                  alt="quality icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Quality</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We control and maintain the quality of our products, followed
                with intensive supervisions from our highly experienced team.
              </p>
            </div>
            <div className="items-center text-primeText w-1/3 hidden sm:flex sm:flex-col">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/commitment.png"
                  alt="commitment icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Commitment</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We maintain good relation with all related parties who
                contributed in the development of our company.{" "}
              </p>
            </div>
          </div>

          <div className="flex sm:hidden gap-10 sm:gap-12 lg:gap-32 py-5 w-full">
            <div className="flex flex-col items-center text-primeText w-1/2">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/commitment.png"
                  alt="commitment icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Commitment</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We maintain good relation with all related parties who
                contributed in the development of our company.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center text-primeText w-1/2">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/professional.png"
                  alt="professional icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Professional</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We deliver the best result and always follow the agreements in
                accordance to the business contracts
              </p>
            </div>
          </div>

          <div className="flex justify-center sm:hidden gap-12 lg:gap-32 py-5 w-full">
            <div className="flex flex-col items-center text-primeText w-1/2">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/innovation.png"
                  alt="innovation icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Innovation</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We develop business and projects starting from the products,
                packaging, design and potential impacts that could be given to
                our valuable customers
              </p>
            </div>
          </div>

          <div className="gap-12 lg:gap-32 w-full justify-center hidden sm:flex">
            <div className="flex flex-col items-center text-primeText w-1/3">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/professional.png"
                  alt="professional icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Professional</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We deliver the best result and always follow the agreements in
                accordance to the business contracts
              </p>
            </div>
            <div className="flex flex-col items-center text-primeText w-1/3">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/innovation.png"
                  alt="innovation icon"
                  layout="fill"
                ></Image>
              </div>
              <h3>Innovation</h3>
              <p className="hidden sm:flex flex-wrap text-sm md:text-base">
                We develop business and projects starting from the products,
                packaging, design and potential impacts that could be given to
                our valuable customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
