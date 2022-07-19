import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Subhero = () => {
  return (
    <div className="w-full aspect-w-6 aspect-h-2">
      <div className="grid grid-cols-2">
        <div className="relative block h-full aspect-w-3 aspect-h-2">
          <div className="flex justify-center h-full w-full">
            <video playsInline loop autoPlay muted>
              <source src="/vid/comp_32.mp4" type="video/mp4" />
            </video>
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
