import Image from "next/image";
const Vco = () => {
  return (
    <div className="flex flex-col min-h-screen text-primeText py-10">
      <div className="flex flex-col flex-grow items-center px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <h2 className="text-aqua font-bold pb-5" id="vco">
          Virgin Coconut Oil
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src="/allproducts/vco.png"
            alt="virgin coconut oil image"
            layout="fill"
          ></Image>
        </div>
        <div className="pt-5">
          <p>
            Our Virgin Coconuts Oil (VCO) is obtained from the fresh, mature
            kernels grown in Indonesia. Oil is produced by making coconut milk
            first and then by centrifugal mechanism. HEAT IS NOT USED in the
            production process and not undergoing chemical refining, deodorizing
            or bleaching, an therefore it dose not lead to the alteration of the
            nature of oil.
          </p>
          <p className="py-5">
            This process make our Virgin Coconuts Oil (VCO) is extracted from
            fresh coconuts using in advanced method that removes sugar, proteins
            and carbohydrates so its molecules are small and easily absorbed. No
            chemicals or high heat are used so the oil retains high levels of
            lauric acid, medium chain fatty acids and antioxidants for maximum
            effectiveness.
          </p>
          <p>
            Our Virgin Coconuts Oil (VCO) is very natural, creamy, has soft
            tecture, has mild coconut aroma and possesess significant lauric
            acid.
          </p>
        </div>
        <div className="w-full py-5 text-sm sm:text-base">
          <h3 className="text-aqua py-2 text-base sm:text-xl">
            Physical Properties Specifications:
          </h3>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Color</p>
            <p className="text-subText">Crystal clear</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Taste</p>
            <p className="text-subText">Free from rancid or sour taste</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Odor</p>
            <p className="text-subText text-right">
              Free from rancid odour and contains a mild sweet coconut aroma
            </p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Relative density (30 C)</p>
            <p className="text-subText">0.912 to 0.926</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Reflective index (40 0C)</p>
            <p className="text-subText">1.4390 to 1.475</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Melting point</p>
            <p className="text-subText">21 – 24 ºC</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Extraneous matter by mass, max</p>
            <p className="text-subText">0.05%</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Food additives</p>
            <p className="text-subText">NOT APPLIED</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Shelf life</p>
            <p className="text-subText">24 months</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Moisture Content</p>
            <p className="text-subText">0.10 % Maximum</p>
          </div>
        </div>
        <div className="w-full text-sm sm:text-base">
          <h3 className="text-aqua py-2 text-base sm:text-xl">
            Fatty Acid Compositions:
          </h3>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Caproic Acid</p>
            <p className="text-subText">0.2 — 0.6 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Caprylic Acid</p>
            <p className="text-subText">5.0 — 9.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Capric Acid</p>
            <p className="text-subText">4.5 — 8.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Lauric Acid</p>
            <p className="text-subText">46.0 — 54.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Myristic Acid</p>
            <p className="text-subText">17.0 — 21.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Palmitic Acid</p>
            <p className="text-subText">7.5 — 10.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Srearic Acid</p>
            <p className="text-subText">2.0 — 4.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Oleic Acid</p>
            <p className="text-subText">5.0 — 8.0 %</p>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 pt-2">
            <p className="font-bold">Linoleic Acid</p>
            <p className="text-subText">0.7 — 2.5 %</p>
          </div>
        </div>
        <div className="py-10" />
        <h2 className="text-aqua font-bold pb-5" id="cco">
          Crude Coconut Oil
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src="/allproducts/cco.png"
            alt="crude coconut oil image"
            layout="fill"
          ></Image>
        </div>
        <p className="pt-5">
          CNO is a crude coconut oil extracted from copra (Dried fresh coconut).
          It can be further processed into RBD (Refined Coconut Oil) which can
          be used in various products such as the beauty, food, and health care
          industries.
        </p>
        <div className="py-10" />
        <h2 className="text-aqua font-bold pb-5" id="rco">
          Refined Coconut Oil
        </h2>
        <div className="relative h-64 w-64">
          <Image
            className="object-contain cursor-pointer"
            src="/allproducts/rco.png"
            alt="refined coconut oil image"
            layout="fill"
          ></Image>
        </div>
        <div className="w-full flex flex-col ">
          <p className="pt-5">
            RBD is a crude coconut oil that has been Refined, Bleached and
            Deodorized.
          </p>
          <p className="pt-5">
            RBD has a special characteristics due to the high pressure refining
            process. It usually looks clearer, contains no smell or taste of the
            copra. Therefore, it can be easily used as a mixture of raw
            materials for soap, cosmetics and processed foods.
          </p>
          <p className="pt-5">
            RBD has a high demand in the market as it contains triglyceride
            fatty acids, which is not a form of cholesterol but can be converted
            into energy. Hence, RBD will not generate excessive fat deposition
            in the body. Furthermore, RBD is also an excellent coconut oil in
            the kitchen especially for extensive frying as it has a high smoking
            point and it is proven to be healthier than vegetable oils from
            other sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vco;
