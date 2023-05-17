import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";

export default function ContactGeneral() {
  return (
    <main>
      <div className="lg:min-h-[500px] h-full bg-gradient-image bg-no-repeat bg-full lg:px-36 md:px-20 px-10 pt-11 md:pt-[50px] pb-14 md:pb-[104px]">
        <div className="flex justify-center items-center h-12 md:h-[120px]">
          <div className="relative w-96 h-full flex justify-center items-center">
            <div className="absolute left-[86px] md:left-[40px] -top-[60px] lg:top-[-50px] lg:left-[-13px]">
              <div className="relative w-[150px] h-[130px] md:w-[200px] md:h-[200px]">
                <Image src={ellipse} alt="ellipse" fill={true} />
              </div>
            </div>
            <h2 className="text-[22px] md:text-4xl lg:text-7xl whitespace-nowrap text-white font-bold h-20 absolute z-1">
              Contact
            </h2>
          </div>
        </div>
        <div className="text-xs md:text-xl leading-4 font-bold md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1172px] pb-10 md:pb-[59px] lg:pb-20">
          Work with us. Experience the difference.
        </div>
      </div>
    </main>
  );
}
