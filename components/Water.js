import Image from "next/image";
const Water = () => {
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10 w-full">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center sm:text-left">
          {"Coconut Water & Jelly"}
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src="/co1.png"
            alt="coconut water jelly image"
            layout="fill"
          ></Image>
        </div>

        <div className="flex flex-col items-start w-full pt-10 lg:w-700 xl:w-1000">
          <h3 className="text-aqua font-bold underline">Packaging:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Bottle</p>
              <p className="text-subText sm:text-right">250 ml</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Packaging/Ctn</p>
              <p className="text-subText sm:text-right">24x250ml</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Carton Dimension</p>
              <p className="text-subText sm:text-right">387x157x149 cm</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Net Gross wth Ctn</p>
              <p className="text-subText sm:text-right">±6,5 kg</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Approx of Cartons</p>
              <p className="text-subText sm:text-right">
                {`1.980 cartons/ 20’’ FCL`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shelf Life</p>
              <p className="text-subText sm:text-right">1 Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Water;
