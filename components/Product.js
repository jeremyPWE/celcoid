import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="bg-nude w-full py-5 sm:py-10 flex items-center justify-center">
      <div className="w-full text-primeText flex flex-col justify-center items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div className="w-full">
          <h2 className="text-aqua">Our Products</h2>
          <p>Made using only the best raw coconut material from Sulawesi.</p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 lg:gap-20 pt-10 items-center justify-center cursor-pointer ">
          <Link href="/our-product?category=briquette-charcoal" passHref>
            <div className="flex flex-col relative items-center text-primeText">
              <div className="relative h-[300px] w-[300px] lg:h-[370px] lg:w-[370px] xl:h-[450px] xl:w-[450px]">
                <Image
                  className="object-cover cursor-pointer"
                  src="/char.png"
                  alt="charcoal product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="absolute text-white items-center w-full h-full flex justify-center">
                <p className="text-[28px] lg:text-[32px] xl:text-[44px] font-medium">
                  Charcoal Products
                </p>
              </div>
            </div>
          </Link>
          <Link href="/our-product?category=desicated-coconut" passHref>
            <div className="flex flex-col relative items-center text-primeText">
              <div className="relative h-[300px] w-[300px] lg:h-[370px] lg:w-[370px] xl:h-[450px] xl:w-[450px]">
                <Image
                  className="object-cover cursor-pointer"
                  src="/coco.png"
                  alt="coconut derivatives image"
                  layout="fill"
                ></Image>
              </div>
              <div className="absolute text-white items-center w-full h-full flex justify-center">
                <p className="text-[28px] lg:text-[32px] xl:text-[44px] font-medium">
                  Coconut Derivatives
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
