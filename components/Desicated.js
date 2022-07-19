import Image from "next/image";

const Desicated = () => {
  const imgCarousel = ["/des1.png", "/des2.png"];
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10 w-full">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center sm:text-left">
          Desicated Coconut
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          {imgCarousel.map((img, index) => (
            <div className="relative h-64 w-64" key={index}>
              <Image
                className="object-contain"
                src={img}
                alt="desicated coconut image"
                layout="fill"
              ></Image>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start w-full pt-10  lg:w-700 xl:w-1000">
          <h3 className="text-aqua font-bold underline">Fine Specification:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Colour </p>
              <p className="text-subText sm:text-right">Natural White</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Flavour</p>
              <p className="text-subText sm:text-right">Mild & Sweet</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Impurities</p>
              <p className="text-subText sm:text-right">Max 10/100G</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ph</p>
              <p className="text-subText sm:text-right">8,5-8,7</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Fat Content</p>
              <p className="text-subText sm:text-right">
                High Fat (65%, ±3%), Reduced Fat (55%, ±3%)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">
            Medium Specification:
          </h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Colour </p>
              <p className="text-subText sm:text-right">Natural White</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Flavour</p>
              <p className="text-subText sm:text-right">Mild & Sweet</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Impurities</p>
              <p className="text-subText sm:text-right">Max 4/100G</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ph</p>
              <p className="text-subText sm:text-right">8,5-8,7</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Fat Content</p>
              <p className="text-subText sm:text-right">
                High Fat (65%, ±3%), Reduced Fat (55%, ±3%)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">Packaging:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">
                25 kg Kraft paper bag with polyethylene liner inside
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">
                25 kg white PP bag + PE bag inside layer
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">MOQ:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">1 Container FCL 20 ft </p>
              <p className="text-subText sm:text-right">Max Load 12-13 MT</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">1 Container FCL 40 ft</p>
              <p className="text-subText sm:text-right">Max Load 24-25 MT</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Loading Port</p>
              <p className="text-subText sm:text-right">
                Tanjung Perak Surabaya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desicated;
