/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ellipse from "../../../assets/digital/gradientarrow.png";
import Arrow from "../../../assets/digital/arrow.png";
import Link from "next/link";
import { ventureData } from "@/utils/constants";

export default function VenturesChallenges() {
  return (
    <div className="lg:min-h-[1100px] h-full bg-white lg:px-32 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
      <div className="relative">
        <Image
          priority={true}
          src={ellipse}
          width={200}
          height={200}
          alt="ellipse"
          className="absolute left-0 top-[6px] md:top-[43px] -rotate-180 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
        />
        <p className="text-xs md:text-xl title-gradient leading-4 md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1023px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
          We are founders and entrepreneurs with real world expertise and
          success in taking companies to market.
        </p>
        <Image
          priority={true}
          src={ellipse}
          width={200}
          height={200}
          alt="ellipse"
          className="absolute right-0 bottom-0 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
        />
      </div>
      <div className="w-full flex items-start justify-center lg:justify-around gap-5 flex-wrap max-w-[1269px] mx-auto mt-10 md:mt-20">
        {ventureData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col justify-center items-center gap-5 md:gap-9 lg:gap-[75px] max-w-[366px]"
            >
              <Image
                priority={true}
                src={elem.img}
                width={200}
                height={200}
                alt="ellipse"
                className="lg:w-[200px] lg:h-[200px] md:w-[120px] md:h-[120px] w-[100px] h-[100px]"
              />
              <div className="flex flex-col gap-4">
                <span className="text-sm lg:text-[22px] text-center text-white title-gradient block w-full font-bold min-h-[25px]">
                  {elem.title}
                </span>
                <div className="w-full h-1 bg-rainbowGradient"></div>
                <span className="text-xs lg:text-xl text-center text-[#272323]">
                  {elem.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center mt-12 md:mt-[100px] lg:mt-[140px]">
        <Link href={"/services"}>
          <div className="h-10 btn-gradient-2 relative px-2 lg:w-[245px] rounded-full lg:h-[79px] flex gap-2 justify-center items-center">
            <span className="text-[#8E6DFD] md:text-base lg:text-lg text-xs">
              Venture services
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
  );
}
