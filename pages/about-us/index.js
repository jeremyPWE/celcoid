import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta
          name="google-site-verification"
          content="njsUz4yjZvhBO9R_40u3_t1diUN9PhggC011AhtoNRs"
        />
        {/* Primary Meta Tags */}
        <title>Celco | About us page</title>
        <meta name="title" content="Celco — About us page" />
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
        <meta property="og:title" content="Celco — About us page" />
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
        <meta property="twitter:title" content="Celco — About us page" />
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
            <h2 className="text-bwhite">About us</h2>
          </div>
        </div>
      </div>
      <main className="flex flex-col flex-grow py-10 w-full items-center">
        <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex justify-center">
            <div className="relative h-64 w-full">
              <Image
                className="object-cover cursor-pointer z-0"
                src="/about1.png"
                alt="about us image"
                layout="fill"
              ></Image>
            </div>
          </div>
          <h2 className="text-aqua text-center py-5">Who are We?</h2>
          <p>
            Celco Indonesia is a leading brand that processes the best quality
            of coconut products in the form of charcoal briquettes in Indonesia.
            Celco Indonesia is derived from the word “Coco Celebes” and it
            operates under CV Sulawesi Agung Makmur Bersama. The processing
            plant and distribution center are located in Makassar, South
            Sulawesi. Celco Indonesia is supported by the Provincial Government
            of South Sulawesi as well as Bank Indonesia to develop and enhance
            the export potentials of coconut products from Sulawesi Island
          </p>
          <p className="py-3">
            The Company uses the finest coconut raw materials from Sulawesi to
            produce the best quality of coconut charcoal briquettes in
            Indonesia. The Company is equipped with a well-established team with
            more than 14 years of experiences and knowledges in the related
            industry that supervizes and controls every production processes in
            Celco Indonesia. The production capacity is at 10 tons/day and the
            Company aims to export the products to countries that actively use
            coconut charcoal briquettes for Barbeque and Sisha. The targetted
            countries are China, United States, Europe, Japan, Korea and Middle
            East.
          </p>
          <p>
            Celco Indonesia also produces various types of coconut products such
            as Copra, Cocofiber, Cocopeat, Dessicated Coconut, Coconut Oil and
            Virgin Coconut Oil (VCO). The Company has involved the local coconut
            farmers in Sulawesi to maintain and manage the quality of coconut
            raw materials that will be used for productions. Furthermore, it has
            committed to continously increase the welfare of local coconut
            farmers and reduce the number of unemployment rate in order to
            strenghten and improve the economic growth in Sulawesi.
          </p>
          <div className="flex justify-center pt-14">
            <div className="relative h-64 w-full">
              <Image
                className="object-cover cursor-pointer z-0"
                src="/about2.png"
                alt="about us image"
                layout="fill"
              ></Image>
            </div>
          </div>
          <h2 className="text-aqua text-center py-5">Our Vision and Mission</h2>
          <p>
            To become one of the best coconut manufacturers that produces the
            best product quality and largest capacity in Indonesia. While
            maintaining the production quality by using the best raw materials
            and giving maximum supervision in every production processes. We
            also strive to improve the welfare of local coconut farmers in
            Sulawesi, and supporting the Government’s objectives in improving
            the regional economy and increasing processed coconut product
            exports in Indonesia
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
