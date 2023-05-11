import Image from "next/image";
import liquid_crypto from "../../../assets/partners/liquid_crypto.png";
import fight_legends from "../../../assets/partners/fight_legends.png";
import york_capital from "../../../assets/partners/york_capital.png";
import universal from "../../../assets/partners/universal.png";
import burger_king from "../../../assets/partners/burger_king.png";
import unnings from "../../../assets/partners/unnings.png";
import fairfax from "../../../assets/partners/fairfax.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const partenrs = [
  liquid_crypto,
  fight_legends,
  york_capital,
  universal,
  burger_king,
  unnings,
  fairfax,
];

export default function OurTeam() {
  return (
    <main className="h-[317px] md:h-[414px] lg:h-[746px] lg:px-36 md:px-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient mx-auto text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Our Partners
      </h2>
      <div>
        <p className="text-xs leading-5 md:text-base lg::text-2xl text-dark-grey text-center font-light">
          By engaging ninety3, you will benefit from the seasoned experience of
          our professional senior experts who have worked with and for some of
          the biggest companies across the globe.
        </p>
      </div>
      <div className="flex gap-36 mt-9 md:mt-[50px] lg:mt-32 overflow-auto">
        <Swiper
          onSlideChange={() => {}}
          onSwiper={() => {}}
          loop
          className="w-full mx-auto"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={50}
        >
          {partenrs.map((item, idx) => (
            <SwiperSlide key={idx} className="w-full">
              <div key={idx} className="h-36 min-w-[132px] md:min-w-[185px]">
                <Image
                  src={item}
                  alt="img"
                  width={130}
                  height={250}
                  className="max-h-[73px] md:max-h-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
