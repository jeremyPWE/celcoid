import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Whatsapp from "../../components/Whatsapp";

export default function Shipping() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta
          name="google-site-verification"
          content="njsUz4yjZvhBO9R_40u3_t1diUN9PhggC011AhtoNRs"
        />
        {/* Primary Meta Tags */}
        <title>CELCO | Shipping information page</title>
        <meta name="title" content="Celco — Shipping information page" />
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
        <meta property="og:title" content="Celco — Shipping information page" />
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
        <meta
          property="twitter:title"
          content="Celco — Shipping information page"
        />
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

      <Whatsapp />
      <div className="relative h-24 w-full flex justify-center">
        <Image
          className="object-cover cursor-pointer z-0"
          src="/banner.png"
          alt="banner image"
          layout="fill"
        ></Image>
        <div className="absolute px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl w-full h-full">
          <div className="h-full w-full flex flex-col justify-center">
            <h2 className="text-bwhite">Shipping</h2>
          </div>
        </div>
      </div>
      <main className="flex flex-col flex-grow py-10 w-full items-center">
        <div className="w-full px-5 sm:px-10  md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
          <div className="flex flex-col items-center">
            <h2 className="text-aqua font-bold pb-5">
              Packaging, Payment, and Shipping
            </h2>
            <div className="w-full py-5">
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Packing Type </p>
                <p className="text-subText sm:text-right">
                  1 Box 1kg, 1 Master Box 10kg (incl inner box+plastic)
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Place of Origin</p>
                <p className="text-subText sm:text-right">
                  FOB Soekarno Hatta Port of Makassar / FOB Tanjung Perak Port
                  of Surabaya
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Payment</p>
                <p className="text-subText sm:text-right">
                  Telegraphic Transfer or L/C
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Delivery Detail</p>
                <p className="text-subText sm:text-right">
                  The products will be delivered within 30 days after the down
                  payment has been made
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Min Order</p>
                <p className="text-subText sm:text-right">
                  20&quot; FT Container
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Quantity</p>
                <p className="text-subText sm:text-right">By request</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-200 pt-5">
                <p className="font-bold">Loadability</p>
                <p className="text-subText sm:text-right">
                  20&quot; FCL Container / 40&quot; FCL Container
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
