import Image from "next/image";
import { services } from "@/utils/constants";

export default function ServicesVentures() {
  return (
    <main>
      <div className="lg:min-h-[calc(100vh-112px)] background-gradient lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <h2 className="title-gradient text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
          Ventures
        </h2>
        <div className="flex flex-col gap-5 lg:gap-16 items-center md:items-center justify-between">
          <p className="text-xs leading-5 lg:pl-20 xl:pl-32 md:text-base lg:text-2xl text-white font-light lg:text-left lg:pr-24">
            We team up with ambitious founders to transform their startup ideas
            into major success stories.
            <br />
            <br />
            As a team of entrepreneurs and founders, we understand the unique
            challenges of starting a business and running a company.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex flex-wrap pt-20 mx-auto justify-center gap-x-5 gap-y-14">
          {services.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex-col sm:flex-none sm:w-[calc(30%-40px)] gap-3 flex items-center justify-center"
              >
                <Image
                  priority={true}
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
