import Image from "next/image";
import { useState } from "react";

const Bricket = () => {
  const imgCarousel = ["/briq1.png", "/briq2.png", "/briq3.png"];
  const [selected, setSelected] = useState("/briq1.png");
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center sm:text-left">
          Briquette Charcoal
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src={selected}
            alt="briquette charcoal image"
            layout="fill"
          ></Image>
        </div>
        <div className="flex gap-2">
          {imgCarousel.map((img, index) => (
            <div
              className="relative h-20 w-20 border"
              key={index}
              onClick={() => setSelected(img)}
            >
              <Image
                className="object-contain cursor-pointer"
                src={img}
                alt="briquette charcoal image"
                layout="fill"
              ></Image>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 xl:space-x-32 w-full lg:w-700 xl:w-1000 justify-center">
          <div className="py-10">
            <h3 className="pb-5 text-aqua underline">Size & Shape:</h3>
            <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap gap-5 sm:gap-10 md:gap-0">
              <div>
                <p>Shape: Cube</p>
                <p>Size:</p>
                <p>25x25x25 mm (72 pcs/kg)</p>
                <p>26x26x26 mm (64 pcs/kg)</p>
                <p>27x27x27 mm (56 pcs/kg)</p>
              </div>
              <div className="md:py-10">
                <p>Shape: Finger</p>
                <p>Size:</p>
                <p>18x35 mm (102 pcs/kg)</p>
                <p>18x50 mm (72 pcs/kg)</p>
                <p>20x50 mm (64 pcs/kg)</p>
              </div>
              <div>
                <p>Shape: Hexagonal</p>
                <p>Size:</p>
                <p>20x35 mm (94 pcs/kg)</p>
                <p>20x50 mm (64 pcs/kg)</p>
              </div>
            </div>
          </div>
          <div className="py-5 md:py-10 lg:w-2/3">
            <h3 className="text-aqua pb-3 underline">Specifications:</h3>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Ash</p>
              <p className="text-subText">2.5%-3% (by Req)</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Ash Color</p>
              <p className="text-subText">White grey</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Fix Carbon</p>
              <p className="text-subText">80% min</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Moisture</p>
              <p className="text-subText">5% max</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Volatile Matter</p>
              <p className="text-subText">14.5% max</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Calorific Value</p>
              <p className="text-subText">7500 Kcal</p>
            </div>
            <div className="flex justify-between border-b-2 border-gray-200 pt-2">
              <p className="font-bold">Origin</p>
              <p className="text-subText">Sulawesi</p>
            </div>
            <div className="pb-5 md:pb-10" />
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-24 sm:w-400 sm:h-32 xl:h-44 xl:w-520">
                <Image
                  className="object-contain cursor-pointer"
                  src="/bricket_badge.png"
                  alt="coconut shell charcoal bricket certificate image"
                  layout="fill"
                ></Image>
              </div>
            </div>
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
        <div className="flex flex-col items-start w-full pt-10 lg:w-700 xl:w-1000">
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

export default Bricket;
