import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Allproduct from "../../components/Allproduct";
import Vco from "../../components/Vco";
import Bricket from "../../components/Bricket";
import Coco from "../../components/Coco";

export default function OurProduct() {
  const router = useRouter();
  const { query } = router;
  const category = query.category || "all-products";
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        {/* Primary Meta Tags */}
        <title>Celco | Product page</title>
        <meta name="title" content="Celco — Product page" />
        <meta
          name="description"
          content="Celco Indonesia is a leading brand that processes the best quality of
          coconut products in the form of charcoal briquettes in Indonesia. Celco Indonesia is supported by the Provincial Government of South
          Sulawesi as well as Bank Indonesia to develop and enhance the
          export potentials of coconut products from Sulawesi Island"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/logo-wbg.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celcoid.com/" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:title" content="Celco — Product page" />
        <meta
          property="og:description"
          content="Celco Indonesia is a leading brand that processes the best quality of
          coconut products in the form of charcoal briquettes in Indonesia. Celco Indonesia is supported by the Provincial Government of South
          Sulawesi as well as Bank Indonesia to develop and enhance the
          export potentials of coconut products from Sulawesi Island"
        />
        <meta property="og:image" content="/meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://celcoid.com/" />
        <meta property="twitter:title" content="Celco — Product page" />
        <meta
          property="twitter:description"
          content="Celco Indonesia is a leading brand that processes the best quality of
          coconut products in the form of charcoal briquettes in Indonesia. Celco Indonesia is supported by the Provincial Government of South
          Sulawesi as well as Bank Indonesia to develop and enhance the
          export potentials of coconut products from Sulawesi Island"
        />
        <meta property="twitter:image" content="/meta.png" />
      </Head>
      <Navigation />
      <div className="relative h-24 w-full flex justify-center">
        <Image
          className="object-cover cursor-pointer z-0"
          src="/banner.png"
          alt="banner image"
          layout="fill"
        ></Image>
        <div className="absolute px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl w-full h-full">
          <div className="h-full w-full flex flex-col justify-center">
            <h2 className="text-bwhite">Our Products</h2>
          </div>
        </div>
      </div>
      <main className="flex flex-col flex-grow py-10 w-full items-center">
        <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex justify-center">
            <ul className="flex py-2 whitespace-nowrap px-10 text-center sm:px-10 overflow-x-scroll scrollbar-hide sm:flex-wrap gap-5 sm:justify-center items-center text-aqua">
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "all-products" ? `bg-aqua text-bwhite` : null
                }`}
              >
                <Link href="/our-product?category=all-products" passHref>
                  <a>All</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "virgin-coconut-oil"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link href="/our-product?category=virgin-coconut-oil" passHref>
                  <a>Virgin Coconut Oil</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "coconut-shell-charcoal-bricket"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link
                  href="/our-product?category=coconut-shell-charcoal-bricket"
                  passHref
                >
                  <a>Coconut Shell Charcoal Bricket</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "cocopeat-cocofiber-copra-nipha"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link
                  href="/our-product?category=cocopeat-cocofiber-copra-nipha"
                  passHref
                >
                  <a>Cocopeat, Cocofiber, Copra, Nipha tea </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {category === "all-products" ? <Allproduct /> : null}
            {category === "virgin-coconut-oil" ? <Vco /> : null}
            {category === "coconut-shell-charcoal-bricket" ? <Bricket /> : null}
            {category === "cocopeat-cocofiber-copra-nipha" ? <Coco /> : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
