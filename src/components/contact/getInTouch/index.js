import Image from "next/image";
import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";

export default function GetInTouch() {
  return (
    <main className="min-h-[317px] md:min-h-[414px] h-full lg:min-h-[746px] lg:px-36 md:px-20 pb-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient mx-auto text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Get in touch
      </h2>
      <div className="mt-1 md:mt-2 lg:mt-3">
        <p className="text-xs sm:text-xl text-black leading-4 md:leading-8 lg:leading-[50px] lg:text-3xl text-center max-w-[455px] font-bold font-poppins m-auto lg:max-w-[1023px]">
          Contact Us
        </p>
      </div>
      <div>
        <p className="text-xs leading-5 md:text-base lg::text-2xl text-dark-grey text-center font-light">
          Don’t be shy, we are happy to chat
        </p>
      </div>

      <div className="max-w-[300px] gap-5 md:gap-12 lg:gap-16 md:max-w-[450px] mx-auto flex flex-col justify-center items-center lg:max-w-[800px] mt-5 md:mt-10 lg:mt-12">
        <div className="w-full">
          <input
            type="text"
            className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl"
            placeholder="Your Name"
          />
          <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl"
            placeholder="Your Email"
          />
          <div className="border-b h-[2px] border-transparent bg-gradient-to-r w-full from-green-400 via-blue-500 to-purple-600 focus:border-green-400 focus:bg-gradient-to-r focus:from-green-400 focus:via-blue-500 focus:to-purple-600"></div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="bg-transparent outline-none border-none h-14 w-full text-sm placeholder:text-sm md:text-base md:placeholder:text-base lg:text-xl lg:placeholder:text-xl"
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
                src={Arrow}
                width={10}
                height={10}
                alt="ellipse"
                className="w-[7px] h-[10px]"
              />
            </div>
          </Link>
        </div>
        <p className="font-light text-xs lg:text-[17px] title-gradient pt-2 lg:pt-[14px] leading-7 text-center">
          hello@ninety3.io +61 414 209 977
        </p>
      </div>
    </main>
  );
}
