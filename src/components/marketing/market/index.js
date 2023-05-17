import Image from "next/image";
import Marketing from "../../../assets/marketing/marketing.png";

export default function Market() {
  return (
    <main className="min-h-[317px] md:min-h-[414px] h-full lg:min-h-[746px] lg:px-36 md:px-20 pb-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient mx-auto text-[22px] lg:mx-0 md:text-[40px] lg:text-[70px] xl:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Go to Market Strategy
      </h2>
      <div className="flex flex-col gap-5 lg:gap-16 items-center justify-between">
        <p className="text-xs leading-5 text-center md:text-base lg:text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
          With over 25 years experience helping companies launch their products,
          we know that having a solid strategy will make all the difference to
          your success. Once we have the strategy blueprint, we create your go
          to marketing launch plan that covers everything that is needed to
          create a buzz. Our full service marketing studio means we have experts
          across Strategy, Branding, Content and Communications.
        </p>
        <Image
          priority={true}
          src={Marketing}
          alt="Marketing"
          className="max-w-[251px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[750px]"
        />
      </div>
    </main>
  );
}
