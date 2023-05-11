/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ellipse from "../../../assets/digital/gradientarrow.png";

export default function MarketingChallenges() {
  return (
    <div className="lg:min-h-[450px] h-full bg-white lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
      <div className="relative">
        <Image
          src={ellipse}
          width={200}
          height={200}
          alt="ellipse"
          className="absolute left-0 top-0 -rotate-180 h-[22px] w-[22px] sm:w-[44px] sm:h-[44px] md:w-[74px] md:h-[74px]"
        />
        <p className="text-xs md:text-xl title-gradient leading-4 md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[500px] font-poppins text-white m-auto lg:max-w-[1023px] xl:max-w-[1200px] 2xl:max-w-[1500px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
          We take the time to understand your business and create an
          individualised plan that focuses on business outcomes
        </p>
        <Image
          src={ellipse}
          width={200}
          height={200}
          alt="ellipse"
          className="absolute right-0 bottom-0 h-[22px] w-[22px] sm:w-[44px] sm:h-[44px] md:w-[74px] md:h-[74px]"
        />
      </div>
    </div>
  );
}
