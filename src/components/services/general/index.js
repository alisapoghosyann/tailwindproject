import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import { digital } from "@/utils/constants";

export default function ServicesGeneral() {
  return (
    <main>
      <div className="lg:min-h-[950px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-16">
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
              Services
            </h2>
          </div>
        </div>
        <h2 className="title-gradient text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
          Digital
        </h2>
        <div className="flex flex-col gap-5 lg:gap-16 items-center md:items-center justify-between">
          <p className="text-xs leading-5 lg:pl-20 xl:pl-32 md:text-base lg:text-2xl text-white font-light lg:text-left lg:pr-24">
            Our digital product studio combines leading technology and
            cutting-edge design to create products that are stylish, powerful
            and functional. We believe great products that work and solve
            real-world problems for your customers is key to long-lasting growth
            and success.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:flex flex-wrap pt-20 mx-auto justify-center gap-x-5 gap-y-14">
          {digital.map((elem, index) => {
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
