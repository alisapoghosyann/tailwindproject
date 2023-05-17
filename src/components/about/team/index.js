import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import "swiper/css";
import { aboutData } from "@/utils/constants";

export default function index() {
  return (
    <main>
      <div className="lg:min-h-[950px] h-full background-gradient lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <div className="flex justify-center items-center h-12 md:h-[120px]">
          <div className="relative w-96 h-full flex justify-start items-center">
            <Image
              src={ellipse}
              alt="ellipse"
              className="absolute top-[-61px] left-[-61px] md:left-[-73px] md:-top-[60px] lg:top-[-50px] lg:left-[-82px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-1">
              Team
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {aboutData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <Image src={item.img} alt="team" />
                <span className="text-xs sm:text-lg leading-4 md:leading-8 lg:text-2xl text-center font-bold font-poppins title-gradient m-auto">
                  {item.title}
                </span>
                <span className="lg:text-xl text-xs md:text-base text-white font-medium">
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
