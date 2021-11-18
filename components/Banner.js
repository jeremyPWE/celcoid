import Image from "next/image";
const Banner = () => {
  return (
    <div className="block">
      <div className="relative h-24 w-full">
        <Image
          className="object-cover cursor-pointer"
          src="/banner.png"
          alt="banner image"
          layout="fill"
        ></Image>
        <h2 className="text-bwhite z-10">Our Product</h2>
      </div>
    </div>
  );
};

export default Banner;
