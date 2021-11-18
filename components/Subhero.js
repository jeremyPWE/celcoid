import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Subhero = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  const images = ["/slide1.png", "/slide2.png", "/slide3.png"];

  const handlePrev = () => {
    setTransR(true);
    setTransL(false);
    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
    if (nextIndex1 < 0) {
      setIndex1(images.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  };
  const handleNext = () => {
    setTransL(true);
    setTransR(false);
  };

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 800);
    }
    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 800);
    }
    const slideShow = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(slideShow);
  }, [transL, transR]);

  return (
    <div className="w-full aspect-w-6 aspect-h-2">
      <div className="grid grid-cols-2">
        <div className="relative block h-full aspect-w-3 aspect-h-2">
          <div className="flex justify-center h-full w-full">
            <div className="relative w-full h-full overflow-hidden bg-black">
              <Image
                className={`absolute object-cover z-20 w-full h-full ${
                  transL
                    ? "transition duration-500 ease-linear transform -translate-x-full"
                    : transR
                    ? "animate-slideL"
                    : ""
                }`}
                src={images[index]}
                layout="fill"
                alt=""
              />
              <Image
                className={`absolute object-cover w-full h-full ${
                  transL
                    ? "animate-slideR"
                    : transR
                    ? "transition duration-500 ease-linear transform translate-x-full"
                    : ""
                }`}
                src={images[index1]}
                layout="fill"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="aspect-w-3 aspect-h-2">
          <div className="w-full h-full bg-aqua text-bwhite flex flex-col justify-center px-4 sm:px-10 lg:px-20 gap-1 sm:gap-5">
            <h2 className="text-sm sm:text-2xl lg:text-3xl xl:text-4xl">
              To become the best coconut product manufacturers in Indonesia
            </h2>
            <Link href="/about-us" passHref>
              <a className="text-xs sm:text-base hover:font-bold">
                more about us...
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subhero;
