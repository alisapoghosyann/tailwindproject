import Image from "next/image";
import fight_legends from "../../../assets/works/fight_legends.jpg";
import funtime from "../../../assets/works/funtime.jpg";
import liquid from "../../../assets/works/liquid.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";

const images = [fight_legends, funtime, liquid];

export default function Banner() {
  return (
    <Swiper
      onSlideChange={() => {}}
      onSwiper={() => {}}
      className="w-full mx-auto homeSwiper h-[280px] md:h-[440px]"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2.5,
        },
        1444: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      loop
      pagination={{ clickable: true }}
    >
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="w-full">
          <div className="h-60 md:h-80 mx-auto w-max border-b-[3px] border-primary">
            <div className="w-[250px] relative h-full max-h-[220px] sm:w-[300px] md:w-[373px] sm:max-h-[285px]">
              <Image src={item} alt="img" fill={true} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
