import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import Bricket from "../../components/Bricket";
import Whatsapp from "../../components/Whatsapp";
import Hardwood from "../../components/Hardwood";
import Sawdust from "../../components/Sawdust";
import Desicated from "../../components/Desicated";
import Water from "../../components/Water";
import Jam from "../../components/Jam";

export default function OurProduct() {
  const router = useRouter();
  const { query } = router;
  const category = query.category || "briquette-charcoal";
  const type = query.type;

  const [selected, setSelected] = useState("charcoal");

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta
          name="google-site-verification"
          content="njsUz4yjZvhBO9R_40u3_t1diUN9PhggC011AhtoNRs"
        />
        {/* Primary Meta Tags */}
        <title>CELCO | Product page</title>
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

        {/* Google Analytics */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZZ4JBSC94"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EZZ4JBSC94');`}
        </script>
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-234948688-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-234948688-1');`}
        </script>
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
            <h2 className="text-bwhite">Our Products</h2>
          </div>
        </div>
      </div>
      <main className="flex flex-col flex-grow py-10 w-full items-center">
        <div className="w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
          <div className="flex justify-start">
            <ul className="flex py-2 whitespace-nowrap px-10 text-center sm:px-10 overflow-x-scroll scrollbar-hide sm:flex-wrap gap-5 sm:justify-center items-center text-aqua">
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "briquette-charcoal" ||
                  category === "sawdust-charcoal" ||
                  category === "hardwood-charcoal"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
                onClick={() => setSelected("charcoal")}
              >
                <Link href="/our-product?category=briquette-charcoal" passHref>
                  <a>Charcoal Products</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "desicated-coconut" ||
                  category === "coconut-water-jelly" ||
                  category === "coconut-jam"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
                onClick={() => setSelected("coconut")}
              >
                <Link href="/our-product?category=desicated-coconut" passHref>
                  <a>Coconut Derivatives</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-start">
            <ul
              className={`py-2 whitespace-nowrap px-10 text-center sm:px-10 overflow-x-scroll scrollbar-hide sm:flex-wrap gap-5 sm:justify-center items-center text-aqua ${
                selected === "charcoal" && category !== "desicated-coconut"
                  ? `flex`
                  : `hidden`
              }`}
            >
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "briquette-charcoal"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link href="/our-product?category=briquette-charcoal" passHref>
                  <a>Briquette Charcoal</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "sawdust-charcoal" ? `bg-aqua text-bwhite` : null
                }`}
              >
                <Link href="/our-product?category=sawdust-charcoal" passHref>
                  <a>Sawdust Charcoal</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "hardwood-charcoal"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link href="/our-product?category=hardwood-charcoal" passHref>
                  <a>Hardwood Charcoal</a>
                </Link>
              </li>
            </ul>

            <ul
              className={`py-2 whitespace-nowrap px-10 text-center sm:px-10 overflow-x-scroll scrollbar-hide sm:flex-wrap gap-5 sm:justify-center items-center text-aqua ${
                selected === "coconut" || category === "desicated-coconut"
                  ? `flex`
                  : `hidden`
              }`}
            >
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "desicated-coconut"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link href="/our-product?category=desicated-coconut" passHref>
                  <a>Dessicated Coconut</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "coconut-water-jelly"
                    ? `bg-aqua text-bwhite`
                    : null
                }`}
              >
                <Link href="/our-product?category=coconut-water-jelly" passHref>
                  <a>Coconut Water & Jelly</a>
                </Link>
              </li>
              <li
                className={`p-2 ring-1 ring-aqua active:bg-aqua active:text-bwhite ${
                  category === "coconut-jam" ? `bg-aqua text-bwhite` : null
                }`}
              >
                <Link href="/our-product?category=coconut-jam" passHref>
                  <a>Coconut Jam</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            {category === "briquette-charcoal" ? <Bricket /> : null}
            {category === "sawdust-charcoal" ? <Sawdust /> : null}
            {category === "hardwood-charcoal" ? <Hardwood /> : null}
            {category === "desicated-coconut" ? <Desicated /> : null}
            {category === "coconut-water-jelly" ? <Water /> : null}
            {category === "coconut-jam" ? <Jam /> : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
