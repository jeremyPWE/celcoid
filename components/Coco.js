import Image from "next/image";
const Coco = () => {
  return (
    <div className="text-primeText py-10 w-full">
      <div className="flex flex-col gap-14 md:gap-0 w-full px-5 sm:px-10 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <div
          className="flex flex-col md:flex-row w-full gap-5 md:gap-0 justify-between xl:justify-around items-center md:items-end lg:items-start md:pb-10"
          id="cocopeat"
        >
          <div className="md:w-1/2">
            <h2 className="text-aqua">Cocopeat</h2>
            <p>
              Cocopeat is a multi purpose growing medium made out of coconut
              husk. The fibrous coconut husk is pre washed,machine dried, sieved
              and made free from sand and other contaminations such as animal
              and plant residue. Cocopeat is a very good alternative to
              traditional peat moss and Rock wool. Its air filled porosity and
              high water holding capacity makes it, an ideal growing medium for
              the plant crops. It is 100% organic and eco friendly, free from
              soil borne pathogen and weed.
            </p>
          </div>
          <div className="relative h-64 w-64">
            <Image
              className="object-contain cursor-pointer"
              src="/allproducts/cocopeat.png"
              alt="cocopeat product image"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full gap-5 md:gap-0 justify-between xl:justify-around items-center md:items-start md:pb-10"
          id="cocofiber"
        >
          <div className="md:w-1/2">
            <h2 className="text-aqua">Cocofiber</h2>
            <p>
              Coconut fiber is obtained from the fibrous husk (mesocarp) of the
              coconut (Cocos nucifera) from the coconut palm, which belongs to
              the palm family (Palmae).Coconut fiber is the only fruit fiber
              usable in the textile industry. Coconut fiber is used to produce
              hawsers, ropes, cords, runners, mats, brooms, brushes, paint
              brushes and as stung for mattresses and upholstered furniture.
            </p>
          </div>
          <div className="relative h-64 w-64">
            <Image
              className="object-contain cursor-pointer"
              src="/allproducts/cocofiber.png"
              alt="cocofiber product image"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full gap-5 md:gap-0 justify-between xl:justify-around items-center md:items-start md:pb-10"
          id="copra"
        >
          <div className="md:w-1/2">
            <h2 className="text-aqua">Copra</h2>
            <p>
              Copra is the dried flesh of coconuts. Every adult coconut tree
              bears 50-75 nuts that can be harvested, split with machetes and
              left to dry in the sun. The copra is then scraped out of the husk
              and gets to dry further on racks. Finally, it is packed in jute
              bags and transported to a processing facility
            </p>
          </div>
          <div className="relative h-64 w-64">
            <Image
              className="object-contain cursor-pointer"
              src="/allproducts/copra.png"
              alt="copra product image"
              layout="fill"
            ></Image>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row w-full gap-5 md:gap-0 justify-between xl:justify-around items-center md:items-start md:pb-10"
          id="nipha"
        >
          <div className="md:w-1/2">
            <h2 className="text-aqua">Nipha tea</h2>
            <p>
              Nipah is a plant from the Palma family that contains high
              anti-oxidants which are efficacious for anti-oxidants to
              counteract free radicals, besides that it also contains natural
              essential amino acids that are not produced by the body
            </p>
          </div>
          <div className="relative h-64 w-64">
            <Image
              className="object-contain cursor-pointer"
              src="/allproducts/nipha.png"
              alt="nipha tea product image"
              layout="fill"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coco;
