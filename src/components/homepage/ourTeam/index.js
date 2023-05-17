import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";
import Image from "next/image";

export default function OurTeam() {
  return (
    <main>
      <div className="bg-[url('../assets/our_team.jpg')] flex justify-between flex-col pb-[55px] h-[283px] md:h-[478px] lg:h-[958px] w-full object-cover md:pl-10 lg:py-[195px] pt-[61px] lg:px-[150px]">
        <div className="lg:w-[866px] mx-auto md:mx-0 relative md:w-[405px] h-[170px] w-[280px] md:h-[230px] lg:h-80 lg:px-11 lg:py-11 p-4 md:p-8">
          <p className="max-w-[595px] lg:max-w-none text-white lg:text-5xl text-base leading-6 md:text-[30px] text-center md:text-left md:leading-[40px] lg:leading-[62px]">
            Highly experienced strategists, design engineers and marketing
            experts.
          </p>
          <div className="bg-white/25 absolute w-full h-full top-0 left-0 border border-white opacity-50"></div>
        </div>
        <div className="flex text-white font-semibold mx-auto md:mx-0 mt-6 md:mt-16 h-12">
          <Link href={"/about"}>
            <div className="h-10 btn-gradient-2 relative px-2 lg:w-[245px] rounded-full lg:h-[79px] flex gap-2 justify-center items-center">
              <span className="text-[#8E6DFD] md:text-base lg:text-lg text-xs">
                Meet our Team
              </span>
              <Image
                priority={true}
                src={Arrow}
                width={10}
                height={10}
                alt="ellipse"
                className="w-[7px] h-[10px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
