import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import { digital } from "@/utils/constants";

export default function ServicesGeneral() {
  return (
    <main>
      <div className="lg:min-h-[950px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-16">
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
              Services
            </h2>
          </div>
        </div>
        <div className="text-xs md:text-xl leading-4 font-bold md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins title-gradient w-max m-auto lg:max-w-[1172px] py-4 md:pt-12 md:pb-[59px] lg:py-11">
          Digital
        </div>
        <div className="flex justify-center">
          <p className="text-xs leading-5 md:text-base lg::text-2xl text-white text-center font-light lg:max-w-3xl">
            Our digital product studio combines leading technology and
            cutting-edge design to create products that are stylish, powerful
            and functional. We believe great products that work and solve
            real-world problems for your customers is key to long-lasting growth
            and success.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 pt-20 mx-auto justify-center gap-x-5 gap-y-14">
          {digital.map((elem, index) => {
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
