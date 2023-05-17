import { marketing } from "@/utils/constants";
import Image from "next/image";

export default function ServiceMarketing() {
  return (
    <main className="min-h-[317px] md:min-h-[414px] h-full lg:min-h-[700px] lg:px-36 md:px-20 pb-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Marketing
      </h2>
      <div className="flex flex-col gap-5 lg:gap-16 items-center md:items-center justify-between">
        <p className="text-xs leading-5 lg:pl-20 xl:pl-32 md:text-base lg:text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
          Strategy-led marketing insights is at the heart of everything we do.
          <br />
          <br />
          Whatever your marketing needs, our full suite of marketing services
          will help you amplify your brand, engage your audience and drive
          revenue.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 pt-20 mx-auto justify-start gap-x-5 gap-y-14">
        {marketing.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex-col gap-3 flex items-center justify-center"
            >
              <Image
                priority={true}
                alt={elem.title}
                src={elem.img}
                className="max-w-[70px] max-h-[70px]"
              />
              <p className="font-medium text-[9px] text-center max-w-[100px] lg:max-w-[150px] sm:text-xs text-black w-max lg:text-sm block">
                {elem.title}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
