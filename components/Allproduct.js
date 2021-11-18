import Image from "next/image";
import Link from "next/link";
const Allproduct = () => {
  return (
    <div className="flex justify-center py-10 text-center">
      <div className="flex flex-wrap max-w-3xl gap-10 justify-center">
        <Link
          href="/our-product?category=coconut-shell-charcoal-bricket"
          passHref
        >
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/bricket.png"
                alt="coconut shell charcoal bricket image"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium flex flex-wrap w-52">
              Coconut shell charcoal bricket
            </p>
          </div>
        </Link>
        <Link
          href="/our-product?category=cocopeat-cocofiber-copra-nipha#cocopeat"
          passHref
        >
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/cocopeat.png"
                alt="cocopeat image"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium">Cocopeat</p>
          </div>
        </Link>
        <Link
          href="/our-product?category=cocopeat-cocofiber-copra-nipha#cocofiber"
          passHref
        >
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/cocofiber.png"
                alt="cocofiber image"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium">Cocofiber</p>
          </div>
        </Link>
        <Link
          href="/our-product?category=cocopeat-cocofiber-copra-nipha#copra"
          passHref
        >
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/copra.png"
                alt="copra image"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium">Copra</p>
          </div>
        </Link>
        <Link
          href="/our-product?category=cocopeat-cocofiber-copra-nipha#nipha"
          passHref
        >
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/nipha.png"
                alt="nipha tea image"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium">Nipha tea</p>
          </div>
        </Link>
        <Link href="/our-product?category=virgin-coconut-oil" passHref>
          <div>
            <div className="relative h-52 w-52">
              <Image
                className="object-contain cursor-pointer"
                src="/allproducts/vco.png"
                alt="virgin coconut oil"
                layout="fill"
              ></Image>
            </div>
            <p className="font-medium">Virgin coconut oil</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Allproduct;
