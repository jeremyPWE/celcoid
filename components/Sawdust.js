import Image from "next/image";
const Sawdust = () => {
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center sm:text-left">
          Sawdust Charcoal
        </h2>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="relative h-64 w-64">
              <Image
                className="object-contain cursor-pointer"
                src="/saw1.png"
                alt="sawdust charcoal image"
                layout="fill"
              ></Image>
            </div>
            <p className="text-center pt-2">Grade A to B</p>
          </div>
          <div>
            <div className="relative h-64 w-64">
              <Image
                className="object-contain cursor-pointer"
                src="/saw2.png"
                alt="sawdust charcoal image"
                layout="fill"
              ></Image>
            </div>
            <p className="text-center pt-2">Grade C to D</p>
          </div>
          <div>
            <div className="relative h-64 w-64">
              <Image
                className="object-contain cursor-pointer"
                src="/saw3.png"
                alt="sawdust charcoal image"
                layout="fill"
              ></Image>
            </div>
            <p className="text-center pt-2">Grade E</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 xl:space-x-20 w-full lg:w-700 xl:w-1000 justify-center">
          <div className="py-10">
            <h3 className="pb-5 text-aqua">{`Size & Shape:`}</h3>
            <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap gap-5 sm:gap-10 md:gap-0">
              <div className="w-full">
                <p className="font-bold pb-2">GRADE:</p>
                <div className="flex md:flex-col justify-between w-full">
                  <div>
                    <p className="font-semibold">-Grade A:</p>
                    <p>Minimal size 12 cm up to 40 cm</p>
                    <p>(Good Shape)</p>
                    <p className="pt-2 font-semibold">-Grade B:</p>
                    <p>Minimal size 12 cm</p>
                    <p>(Good Shape)</p>
                    <p className="pt-2 font-semibold">-Grade C:</p>
                    <p>Up to size 12 cm</p>
                    <p>(Little bit break)</p>
                  </div>
                  <div>
                    <p className="pt-2 font-semibold">-Grade D:</p>
                    <p>Up to size 5 cm</p>
                    <p>(Little bit break)</p>
                    <p className="pt-2 font-semibold">-Grade E:</p>
                    <p>No size</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 md:py-10 md:w-2/3 w-full">
            <h3 className="text-aqua pb-3">Specifications:</h3>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Ash</p>
              <p className="text-subText">3% Max</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Size</p>
              <p className="text-subText">5 cm diameter (inner hole 1cm)</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Fix Carbon</p>
              <p className="text-subText">85% min</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Moisture</p>
              <p className="text-subText">6% max</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Volatile Matter</p>
              <p className="text-subText">15% max</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Calorific Value</p>
              <p className="text-subText">7500 Kcal</p>
            </div>
            <div className="pb-5 md:pb-10" />
          </div>
        </div>
        <div className="flex flex-col items-start w-full lg:w-700 xl:w-1000">
          <h3 className="text-aqua font-bold underline">Packaging:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">1. Inner box </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold pl-4">
                1,2,5 kg inner box full color printing + masterbox 10 kg
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">2. Master box only</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold pl-4">10 kg + inner plastic</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full lg:w-700 xl:w-1000 pt-10">
          <h3 className="text-aqua font-bold underline">MOQ:</h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">1 Container FCL 20 ft </p>
              <p className="text-subText sm:text-right">18 ton</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">1 Container FCL 40 ft</p>
              <p className="text-subText sm:text-right">25 ton</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Loading Port</p>
              <p className="text-subText sm:text-right">
                Tanjung Perak Surabaya
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Export Document</p>
              <p className="text-subText sm:text-right">
                Certificate Origin, MSDS, SHT, ROA, Bill of Landing, Invoice,
                Packing List
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sawdust;
