import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";

export default function GetInTouch() {
  return (
    <main>
      <div className="lg:min-h-[950px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-20 md:pt-[114px] pb-14 md:pb-[104px]">
        <div className="relative h-full flex justify-start items-center">
          <Image
            src={ellipse}
            alt="ellipse"
            className="absolute top-[-86px] left-[-61px] md:left-[-73px] md:-top-[121px] lg:top-[-111px] lg:left-[-82px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
          />
          <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
            Get in touch
          </h2>
        </div>
        <div className="mt-1 md:mt-16 lg:mt-24">
          <p className="text-xs sm:text-xl text-white leading-4 md:leading-8 lg:leading-[50px] lg:text-3xl text-center max-w-[455px] font-bold font-poppins m-auto lg:max-w-[1023px]">
            Contact Us
          </p>
        </div>
        <div>
          <p className="text-xs leading-5 md:text-base lg::text-2xl title-gradient w-max mx-auto text-center font-light">
            Don’t be shy, we are happy to chat
          </p>
        </div>

        <div className="max-w-[300px] gap-5 md:gap-12 lg:gap-16 md:max-w-[450px] mx-auto flex flex-col justify-center items-center lg:max-w-[800px] mt-5 md:mt-10 lg:mt-12">
          <div className="w-full">
            <input
              type="text"
              className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
              placeholder="Your Name"
            />
            <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
              placeholder="Your Email"
            />
            <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
          </div>
          <div className="w-full">
            <input
              type="text"
              className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl placeholder:text-white text-white"
              placeholder="Your Message"
            />
            <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
          </div>
          <div className="w-full flex justify-end">
            <Link href={""}>
              <div className="h-10 btn-gradient-2 relative px-2 md:w-[180px] md:h-[50px] lg:w-[210px] rounded-full lg:h-[60px] flex gap-2 justify-center items-center">
                <span className="text-[#8E6DFD] md:text-base lg:text-lg text-xs">
                  Send
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
      </div>
    </main>
  );
}
