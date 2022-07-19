import Image from "next/image";
import { useState } from "react";

const Hardwood = () => {
  const imgCarousel = ["/hard1.png", "/hard2.png", "/hard3.png"];
  const [selected, setSelected] = useState("/hard1.png");
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5 text-center sm:text-left">
          Hardwood Charcoal
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src={selected}
            alt="hardwood charcoal image"
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
                alt="hardwood charcoal image"
                layout="fill"
              ></Image>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start w-full pt-10 lg:w-700 xl:w-1000">
          <h3 className="text-aqua font-bold underline">
            Tamarind Wood Charcoal Specification:
          </h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Moisture </p>
              <p className="text-subText sm:text-right">Max 8%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ash </p>
              <p className="text-subText sm:text-right">4%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Calories </p>
              <p className="text-subText sm:text-right">min 6000 KCAL</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Size </p>
              <p className="text-subText sm:text-right">5 cm</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shape</p>
              <p className="text-subText sm:text-right">Lump Size</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">
            Halaban/Alaban Wood Charcoal Specification:
          </h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Moisture </p>
              <p className="text-subText sm:text-right">Max 8%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ash </p>
              <p className="text-subText sm:text-right">4%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Calories </p>
              <p className="text-subText sm:text-right">min 6000 KCAL</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Size </p>
              <p className="text-subText sm:text-right">5 cm</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shape</p>
              <p className="text-subText sm:text-right">Lump Size</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">
            Sonokeling/Rosewood Wood Charcoal Specification:
          </h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Moisture </p>
              <p className="text-subText sm:text-right">Max 8%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ash </p>
              <p className="text-subText sm:text-right">4%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Calories </p>
              <p className="text-subText sm:text-right">min 6000 KCAL</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Size </p>
              <p className="text-subText sm:text-right">5 cm</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shape</p>
              <p className="text-subText sm:text-right">Lump Size</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
          <h3 className="text-aqua font-bold underline">
            Mangrove Wood Charcoal Specification:
          </h3>
          <div className="w-full pt-2">
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Moisture </p>
              <p className="text-subText sm:text-right">Max 8%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Ash </p>
              <p className="text-subText sm:text-right">4%</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Calories </p>
              <p className="text-subText sm:text-right">min 8000 KCAL</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Size </p>
              <p className="text-subText sm:text-right">5 cm</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
              <p className="font-bold">Shape</p>
              <p className="text-subText sm:text-right">
                Lump size, stick/kachi, branch
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start w-full pt-10">
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
        <div className="flex flex-col items-start w-full pt-10">
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

export default Hardwood;
