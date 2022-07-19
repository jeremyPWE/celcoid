import Image from "next/image";
const Jam = () => {
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10 w-full">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center w-full ">
          Coconut Jam
        </h2>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="relative h-64 w-64">
              <Image
                className="object-contain cursor-pointer"
                src="/jam1.png"
                alt="coconut jam image"
                layout="fill"
              ></Image>
            </div>
            <p className="text-center pt-2">Pandan Kaya Jam</p>
          </div>
          <div>
            <div className="relative h-64 w-64">
              <Image
                className="object-contain cursor-pointer"
                src="/jam2.png"
                alt="kaya jam image"
                layout="fill"
              ></Image>
            </div>
            <p className="text-center pt-2">Caramel Kaya Jam</p>
          </div>
        </div>

        <div className="flex flex-col items-start pt-10 w-full md:w-500 lg:w-700 xl:w-1000">
          <h3 className="text-aqua font-bold underline">Packaging:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ingridients</p>
              <p className="text-subText sm:text-right">
                Coconut Milk, Sugar, Caramel, Eggs, and Natrium
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Packaging</p>
              <p className="text-subText sm:text-right">Jam Bottle 220 Gr</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Packaging/Ctn</p>
              <p className="text-subText sm:text-right">20x220Gr</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Net Gross wth Ctn</p>
              <p className="text-subText sm:text-right">±6 kg</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Approx of Cartons</p>
              <p className="text-subText sm:text-right">
                {`1.500 cartons/ 20’’ FCL`}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shelf Life</p>
              <p className="text-subText sm:text-right">6 Months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jam;
