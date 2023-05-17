import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import { news } from "@/utils/constants";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function News() {
  return (
    <main>
      <div className="lg:h-[1174px] background-gradient lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <div className="flex justify-start items-center h-12 md:h-[120px]">
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
              News
            </h2>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
          loop
          className="flex justify-between mt-[15px] lg:mt-[96px] gap-5 md:gap-[30px] lg:gap-5 xl:gap-[89px]"
        >
          {news.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="max-w-[205px] md:max-w-[310px] lg:max-w-[350px] 2xl:max-w-[400px] w-full flex flex-col border-2 bg_gradient bg-grey-100 hover:bg-rainbowGradient cursor-pointer"
              >
                <Image
                  priority={true}
                  src={item.img}
                  alt="news image"
                  className="w-full cursor-pointer max-h-[153px] lg:max-h-none"
                />
                <div className="pt-5 pl-2 lg:pl-[14px] pr-5 pb-5 font-poppins filter-Shadow cursor-pointer">
                  <span className="font-medium text-sm lg:text-[22px] text-white block w-full">
                    {item.title}
                  </span>
                  <p className="font-light text-xs lg:text-[17px] text-white pt-2 lg:pt-[14px] block leading-7 !line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center pt-[14px] lg:pt-[28px]">
                    <a
                      href={item.link}
                      target="_blank"
                      className="font-light  lg:font-medium text-xs lg:text-sm text-white  border-b-[1px] pb-1"
                    >
                      Read more
                    </a>
                    <ChevronRightIcon
                      className="w-5 h-5 stroke-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
}
