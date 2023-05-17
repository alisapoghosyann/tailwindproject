import Image from "next/image";
import fight_legends from "../../../assets/works/fight_legends.jpg";
import funtime from "../../../assets/works/funtime.jpg";
import Yorkstcapital from "../../../assets/works/yorkstcapital.png";
import Photoskin from "../../../assets/works/photoskin.jpeg";
import Moonraydr from "../../../assets/works/moonraydr.png";
import Propertyfirstinvestments from "../../../assets/works/propertyfirstinvestments.png";
import liquid from "../../../assets/works/liquid.png";
import Weyo from "../../../assets/works/weyo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const images = [
  fight_legends,
  funtime,
  liquid,
  Yorkstcapital,
  Photoskin,
  Moonraydr,
  Propertyfirstinvestments,
  Weyo,
];
const data = [
  { title: "Fight Legends", desc: "Web3 GameFi" },
  { title: "The Wiggles FunTime with Faces", desc: "Mobile App" },
  { title: "Liquid Crypto", desc: "Web3 DeFi platform" },
  { title: "York St Capital", desc: "Web platform" },
  { title: "Photoskin", desc: "E-commerce platform" },
  { title: "Moonraydr", desc: "Web3 platform" },
  { title: "Property First Investments", desc: "Web platform" },
  { title: "Weyo", desc: "Mobile App" },
];

export default function Banner() {
  return (
    <Swiper
      className="w-full mx-auto homeSwiper h-[330px] md:h-[440px] !flex justify-center items-end"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2.1,
        },
        1444: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      loop
      speed={600}
      pagination={{ clickable: true }}
    >
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="w-full">
          <div className="h-60 md:h-80 mx-auto w-max border-b-[3px] pb-5 md:pb-0 border-primary">
            <div className="w-[250px] relative h-full max-h-[220px] sm:w-[300px] md:w-[373px] sm:max-h-[285px]">
              <Image
                src={item}
                alt="img"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-3 lg:mt-5 gap-1">
            <span className="text-black text-base md:text-lg">
              {data[idx]?.title || ""}
            </span>
            <span className="text-xs leading-5 md:text-base lg::text-2xl text-dark-grey text-center font-light">
              {data[idx]?.desc || ""}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
