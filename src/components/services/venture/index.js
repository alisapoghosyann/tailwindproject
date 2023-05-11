import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Arrow from "../../../assets/digital/greyarrow.png";
import { services } from "@/utils/constants";

export default function ServicesVentures() {
  return (
    <main>
      <div className="lg:min-h-[calc(100vh-112px)] background-gradient lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <div className="flex justify-center items-center h-12 md:h-[120px]">
          <div className="relative w-96 h-full flex justify-center items-center">
            <Image
              src={ellipse}
              width={200}
              height={200}
              alt="ellipse"
              className="absolute left-[40px] -top-[60px] lg:top-[-50px] lg:left-[-13px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
              Ventures
            </h2>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute left-0 top-5 -rotate-180 w-[44px] h-[44px] md:w-[74px] md:h-[74px] xl:left-[10rem]"
          />
          <p className="text-xs leading-5 md:text-base lg::text-2xl text-white text-center font-light m-auto lg:max-w-[1023px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
            We team up with ambitious founders to transform their startup ideas
            into major success stories.
            <br />
            As a team of entrepreneurs and founders,
            <br />
            we understand the unique challenges of starting a business and
            running a company.
          </p>
          <Image
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute right-0 bottom-0 h-[22px] w-[22px] sm:w-[44px] sm:h-[44px] md:w-[74px] md:h-[74px] xl:right-[10rem]"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 pt-20 mx-auto justify-center gap-x-5 gap-y-14">
          {services.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex-col gap-3 flex items-center justify-center"
              >
                <Image
                  alt={elem.title}
                  src={elem.img}
                  className="max-w-[70px] max-h-[70px]"
                />
                <p className="font-medium max-w-[100px] lg:max-w-[150px] text-center text-[9px] sm:text-xs title-gradient w-max lg:text-sm text-white block">
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
