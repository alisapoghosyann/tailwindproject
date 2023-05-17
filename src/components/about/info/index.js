import React from "react";
import Person from "../../../assets/about/about.png";
import Image from "next/image";

const index = () => {
  return (
    <main className="min-h-[407px] lg:min-h-[calc(100vh-112px)] h-full lg:px-36 md:px-20 px-10 pt-[34px] md:pt-[50px] lg:pt-28 bg-[#f5f5f5] pb-20">
      <div className="flex w-full justify-center xl:justify-between sm:gap-12 flex-wrap xl:flex-nowrap">
        <div className="flex flex-col sm:flex-row xl:flex-col w-[70%] justify-start sm:gap-20 xl:justify-center items-center sm:items-start xl:gap-2">
          <Image
            priority={true}
            src={Person}
            width={"90%"}
            height={"90%"}
            alt="founder"
            className="sm:max-w-[36%] object-cover lg:max-w-[376px] lg:max-h-[515px]"
          />
          <div>
            <p className="text-xs sm:text-2xl leading-4 md:leading-8 lg:leading-[67px] lg:text-4xl text-center max-w-[455px] font-bold font-poppins title-gradient m-auto lg:max-w-[1023px]">
              Meagan Henderson
            </p>
            <p className="text-xs sm:text-xl leading-4 text-black md:leading-8 lg:leading-[50px] lg:text-3xl text-center max-w-[455px] font-bold font-poppins m-auto lg:max-w-[1023px]">
              Founder and CEO
            </p>
            <p className="font-light text-xs lg:text-[17px] title-gradient pt-2 lg:pt-[14px] leading-7 text-center">
              meagan@ninety3.io
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5 text-black lg:gap-10 w-full xl:max-w-[1000px]">
          <span className="text-xs lg:text-xl">
            Founded in 2012, Meagan has been successfully launching products and
            new businesses across many industry sectors including entertainment,
            technology and consumer products. In 2020, she turned her attention
            to the world of startups and began focussing on Web3. She quickly
            caught the technology bug and has been down the rabbit hole ever
            since (and wouldn’t have it any other way).
          </span>
          <span className="text-xs lg:text-xl">
            Drawing on her 25 year’s experience as a strategy and go to market
            expert, Meagan offers the wisdom and real-world commercial
            experience not often found in Web3..
          </span>
          <span className="text-xs lg:text-xl">
            Meagan has hand-picked a team of senior Web3 technology and
            marketing experts with real world corporate experience to create her
            dream of helping entrepreneurs transform their ambitious ideas into
            unstoppable businesses (with real commercial outcomes) using, of
            course, emerging technology.
          </span>
        </div>
      </div>
    </main>
  );
};

export default index;
