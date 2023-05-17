import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import ArrowGrey from "../../../assets/digital/greyarrow.png";

export default function MarketingGeneral() {
  return (
    <main>
      <div className="lg:min-h-[calc(100vh-112px)] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-5 lg:pb-[104px]">
        <div className="flex justify-center items-center h-12 md:h-[120px]">
          <div className="relative w-96 h-full flex justify-start items-center">
            <Image
              priority={true}
              src={ellipse}
              width={200}
              height={200}
              alt="ellipse"
              className="absolute -top-[61px] left-[61px] md:left-[40px] md:-top-[60px] lg:top-[-50px] lg:left-[-81px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
              Marketing
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            priority={true}
            src={ArrowGrey}
            alt="ellipse"
            className="absolute left-0 top-[6px] md:top-[43px] -rotate-180 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
          />
          <div className="text-xs md:text-xl leading-4 md:leading-8 lg:leading-[67px] lg:text-[43px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1030px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
            A dedicated and highly experienced{" "}
            <span className="title-gradient">marketing team</span> without the
            cost of big agencies.
          </div>
          <Image
            priority={true}
            src={ArrowGrey}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute right-0 bottom-0 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
          />
        </div>
        <p className="text-xs lg:text-xl xl:text-[22px] text-white text-center lg:!leading-[44px] mt-5 lg:mt-9">
          We bring a startup mentality to everything we do and understand that
          million-dollar budgets are reserved for the few. Our marketing team
          works with efficiency and agility while giving you the same capability
          and expertise that you would expect from a large scale agency.
        </p>
      </div>
    </main>
  );
}
