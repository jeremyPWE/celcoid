import React, { Component } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="bg-nude w-full py-5 sm:py-10">
      <div className="w-full text-primeText flex flex-col justify-center items-center">
        <div className="w-full px-10 md:px-0 md:max-w-2xl xl:max-w-5xl 2xl:max-w-6xl">
          <h2 className="text-aqua">Our Products</h2>
          <p>Made using only the best raw coconut material from Sulawesi.</p>
        </div>
        <ScrollContainer className="overflow-x-scroll px-10 md:px-14 lg:px-36 2xl:px-80 flex w-full gap-10 sm:gap-20 pt-10">
          {/*<div className="flex w-full px-80 gap-20 pt-10">*/}
          <Link
            href="/our-product?category=coconut-shell-charcoal-bricket"
            passHref
          >
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/charcoal.png"
                  alt="charcoal bricket product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-2 lg:py-3 px-3 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3 className="text-base lg:text-lg">
                  Coconut Shell Charcoal Briquettes
                </h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Made using only the highest quality coconut shell charcoal.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/our-product?category=cocopeat-cocofiber-copra-nipha#cocofiber"
            passHref
          >
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/cocofiber.png"
                  alt="cocofiber product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Cocofiber</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Obtained from the firbous husk of the coconut from the coconut
                  palm
                </p>
              </div>
            </div>
          </Link>
          <Link href="/our-product?category=coconut-oil" passHref>
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/vco.png"
                  alt="virgin coconut oil product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Virgin Coconut Oil</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Mild coconut oil aroma that possesess significant lauric acid.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/our-product?category=coconut-oil#cco" passHref>
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/cco.png"
                  alt="crude coconut oil product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Crude Coconut Oil</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Crude coconut oil extracted from copra.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/our-product?category=coconut-oil#rco" passHref>
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/rco.png"
                  alt="refined coconut oil product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Refined Coconut Oil</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Crude coconut oil that has been Refined, Bleached and
                  Deodorized.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/our-product?category=cocopeat-cocofiber-copra-nipha#copra"
            passHref
          >
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/copra.png"
                  alt="copra product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Copra</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  Copra is the dried flesh of coconuts.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/our-product?category=cocopeat-cocofiber-copra-nipha#nipha"
            passHref
          >
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/nipha.png"
                  alt="nipha tea product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Nipha Tea</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  A plant for Palma Family that contains high anti-oxidants
                  which are efficacious.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/our-product?category=cocopeat-cocofiber-copra-nipha#cocopeat"
            passHref
          >
            <div className="flex flex-col items-center text-primeText">
              <div className="relative h-80 w-56 sm:h-400 sm:w-287 lg:h-488 lg:w-350">
                <Image
                  className="object-contain cursor-pointer"
                  src="/cocopeat.png"
                  alt="cocopeat product image"
                  layout="fill"
                ></Image>
              </div>
              <div className="bg-bwhite w-48 h-14 sm:w-64 lg:w-80 sm:h-24 -mt-10 sm:-mt-14 z-10 py-3 px-5 shadow-xl flex flex-col justify-center items-center sm:items-start sm:justify-start">
                <h3>Cocopeat</h3>
                <p className="text-xs lg:text-sm hidden sm:flex">
                  A multi purpose growing medium made out of coconut husk.
                </p>
              </div>
            </div>
          </Link>

          {/*</div>*/}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Product;
