import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function OurTeam() {
  return (
    <main>
      <div className="bg-[url('../assets/our_team.jpg')] flex justify-between flex-col pb-[55px] h-[283px] md:h-[478px] lg:h-[958px] w-full object-cover md:pl-10 lg:py-[195px] pt-[61px] lg:px-[150px]">
        <div className="lg:w-[866px] mx-auto md:mx-0 relative md:w-[405px] h-[170px] w-[280px] md:h-[230px] lg:h-80 lg:px-11 lg:py-11 p-4 md:p-8">
          <p className="max-w-[595px] lg:max-w-none text-white lg:text-5xl text-base leading-6 md:text-[30px] text-center md:text-left md:leading-[40px] lg:leading-[90px]">
            Highly experienced strategists, design engineers and marketing
            experts.
          </p>
          <div className="bg-white/25 absolute w-full h-full top-0 left-0 border border-white opacity-50"></div>
        </div>
        <div className="flex text-white font-semibold mx-auto md:mx-0 mt-6 md:mt-16 h-12 max-w-max">
          <p className="border-b-2 lg:text-2xl text-xs md:text-lg border-white">
            Meet our team
          </p>
          <ChevronRightIcon className="h-7 w-7 pt-1.5" aria-hidden="true" />
        </div>
      </div>
    </main>
  );
}
