import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import Subhero from "../components/Subhero";
import Team from "../components/Team";
import Whatsapp from "../components/Whatsapp";
import Whyus from "../components/Whyus";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="njsUz4yjZvhBO9R_40u3_t1diUN9PhggC011AhtoNRs"
        />
        {/* Primary Meta Tags */}
        <title>CELCO | CV SULAWESI AGUNG MAKMUR BERSAMA</title>
        <meta name="title" content="Celco — CV SULAWESI AGUNG MAKMUR BERSAMA" />
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
        <meta
          property="og:title"
          content="Celco — CV SULAWESI AGUNG MAKMUR BERSAMA"
        />
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
          content="Celco — CV SULAWESI AGUNG MAKMUR BERSAMA"
        />
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
      <Hero />
      <Subhero />
      <Whyus />
      <Product />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}
