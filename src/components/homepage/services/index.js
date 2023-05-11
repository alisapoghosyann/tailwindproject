import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Arrow from "../../../assets/digital/greyarrow.png";

export default function Services() {
  return (
    <main>
      <div className="h-[500px] lg:h-[1174px] background-gradient lg:px-36 md:px-20 px-10">
        <div className="relative">
          <Image
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute left-0 top-5 -rotate-180 w-[44px] h-[44px] md:w-[74px] md:h-[74px]"
          />
          <p className="text-xs md:text-xl leading-4 md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1023px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
            ​We’re problem solvers and strategic thinkers. See what we can do
            for you.
          </p>
          <Image
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute right-0 bottom-0 h-[22px] w-[22px] sm:w-[44px] sm:h-[44px] md:w-[74px] md:h-[74px]"
          />
        </div>
        <div className="flex justify-center items-center min-h-20 h-24">
          <div className="relative w-96 h-full flex justify-center items-center">
            <Image
              src={ellipse}
              width={200}
              height={200}
              alt="ellipse"
              className="absolute left-8 lg:top-[-77px] -top-10                                                                                                                                                                                                                                                                md:-top-[95px] lg:left-[-67px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
              Services
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-2xl md:mt-12 lg:mt-32">
          <div className="flex md:flex-col justify-between md:justify-end -mt-10 cursor-pointer">
            <p className="title-gradient w-max text-left text-base md:text-[30px] lg:text-[70px] leading-[40px] lg:leading-[105px] font-bold text-white/20 ">
              Digital
            </p>
            <p className="text-left text-base md:text-[30px] lg:text-[70px] leading-[40px] lg:leading-[105px] font-bold text-white/20">
              Ventures
            </p>
            <p className="text-left text-base md:text-[30px] lg:text-[70px] leading-[40px] lg:leading-[105px] font-bold text-white/20">
              Marketing
            </p>
          </div>
          <div className="md:ml-28 -pl-5 max-w-[963px] mt-[30px] md:mt-0">
            <p className="text-xs lg:text-xl text-white text-left">
              Our digital product studio combines leading technology and
              cutting-edge design to create products that are stylish, powerful
              and functional. We believe great products that work and solve
              real-world problems is key to long-lasting growth and success.
            </p>
            <br />
            <p className="text-xs lg:text-xl text-white text-left">
              Whether you have a bold idea and are just starting out, or an
              already established business, we partner with you to help you
              build, elevate your strengths, and realise your vision.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
