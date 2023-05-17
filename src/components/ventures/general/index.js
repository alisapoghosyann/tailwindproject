import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";
import ArrowGrey from "../../../assets/digital/greyarrow.png";

export default function DigitalVentures() {
  return (
    <main>
      <div className="lg:min-h-[950px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <div className="flex justify-center items-center h-12 md:h-[120px]">
          <div className="relative w-96 h-full flex justify-start items-center">
            <Image
              priority={true}
              src={ellipse}
              width={200}
              height={200}
              alt="ellipse"
              className="absolute top-[-61px] left-[-61px] md:left-[-73px] md:-top-[60px] lg:top-[-50px] lg:left-[-82px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
              Ventures
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
          <div className="text-xs md:text-xl leading-4 md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1023px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
            A <span className="title-gradient">venture studio model </span> with
            a proven pathway for success
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
          Our venture model only takes a limited number of projects each year to
          give you the dedication and resources needed to take your idea to
          market. Through our rigorous and stage-gated program, we have designed
          a partnership model where you will be supported every step of the way.
          Our incentive is derived from equity, meaning we only prosper when you
          do.
        </p>
        <div className="text-xs md:text-xl leading-4 font-bold md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1172px] py-5 md:pt-12 md:pb-[59px] lg:py-10">
          Are you <span className="title-gradient">an entrepreneur</span> with a
          bold idea?
        </div>
        <div className="w-full flex justify-center items-center pt-12 md:pt-[100px] lg:pt-9">
          <Link href={"/contact"}>
            <div className="h-10 btn-gradient-2 relative px-2 lg:w-[245px] rounded-full lg:h-[79px] flex gap-2 justify-center items-center">
              <span className="text-[#8E6DFD] md:text-base lg:text-lg text-xs">
                Pitch us your idea
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
