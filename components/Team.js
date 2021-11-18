import Image from "next/image";

const Team = () => {
  return (
    <div className="flex flex-col items-center py-10 xl:py-20">
      <h2 className="text-aqua">Our Team</h2>
      <p className="text-primeText">meet our wonderful team</p>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 md:gap-40 pt-10 xl:pt-14">
        <div className="flex flex-col items-center text-primeText">
          <div className="relative h-44 w-44 sm:h-52 sm:w-52">
            <Image
              className="object-contain cursor-pointer"
              src="/team1.png"
              alt="team image"
              layout="fill"
            ></Image>
          </div>
          <h3 className="xl:pt-4">Christopher Kevin</h3>
          <p>Founder</p>
          <a
            href="https://www.linkedin.com/in/christopher-kevin-6a15b5212/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <div className="relative h-7 w-7">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/linkedin-black.svg"
                alt="team image"
                layout="fill"
              ></Image>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center text-primeText">
          <div className="relative h-44 w-44 sm:h-52 sm:w-52">
            <Image
              className="object-contain cursor-pointer"
              src="/team2.png"
              alt="team image"
              layout="fill"
            ></Image>
          </div>
          <h3 className="xl:pt-4">Jesslyn Claudia</h3>
          <p>Co-Founder</p>
          <a
            href="https://www.linkedin.com/in/jesslyn-claudia-63a500225/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <div className="relative h-7 w-7">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/linkedin-black.svg"
                alt="team image"
                layout="fill"
              ></Image>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
