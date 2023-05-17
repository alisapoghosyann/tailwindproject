import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";
import Image from "next/image";
import Web2 from "../../../assets/marketing/web2.png";
import Web3 from "../../../assets/marketing/web3.png";
import WebArrow from "../../../assets/marketing/webarrow.png";
import { items, secondItem } from "@/utils/constants";

export default function WebMarket() {
  return (
    <main className="min-h-[317px] md:min-h-[414px] h-full lg:min-h-[700px] lg:px-36 md:px-20 pb-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient mx-auto text-[22px] lg:mx-0 md:text-[40px] lg:text-[70px] xl:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Web2 to Web3 experts
      </h2>
      <div className="flex flex-col gap-5 lg:gap-3 items-center md:items-start justify-between">
        <p className="text-xs leading-5 text-center md:text-base lg:text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
          We specialise in helping companies with an interest in delving into
          the world of Web3 and emerging technology. Our specialised team with
          deep Web3 and blockchain knowledge helps businesses leverage these
          emerging technologies to create unique and impactful digital customer
          experiences.
        </p>
        <div className="w-full">
          <p className="text-xs leading-5 text-center lg:text-left md:text-base lg:text-2xl text-dark-grey font-light lg:pr-24">
            We can help you develop concepts or connect with other projects
            across:
            <br />
            <br />
          </p>
          <div className="flex w-full items-center flex-col lg:flex-row justify-between md:pr-14 mt-10">
            <div className="flex flex-col gap-2 w-full sm:w-[65%] 2xl:gap-7 2xl:flex-row">
              <div className="flex lg:flex-col justify-between w-full lg:w-auto lg:justify-center gap-3">
                {items.map((elem, idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="bg-gradient w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full"></div>
                      <span className="text-xs leading-5 text-center lg:text-left md:text-base lg:text-2xl text-dark-grey font-light lg:pr-24">
                        {elem}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex lg:flex-col justify-between my-5 lg:my-0 w-full lg:w-auto lg:justify-center gap-3">
                {secondItem.map((elem, idx) => {
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="bg-gradient w-[10px] h-[10px] min-w-[10px] min-h-[10px] rounded-full"></div>
                      <span className="text-xs leading-5 text-center lg:text-left md:text-base lg:text-2xl text-dark-grey font-light lg:pr-24">
                        {elem}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex-col flex">
              <div className="flex gap-3 sm:gap-9">
                <div className="flex justify-center items-center flex-col">
                  <Image
                    priority={true}
                    src={Web2}
                    alt="Web2-Web3"
                    className="max-w-[80px] max-h-[80px] sm:max-w-[120px] sm:max-h-[120px] md:max-w-[200px] md:max-h-[200px] lg:max-h-[200px] lg:max-w-[200px] xl:max-h-[250px] xl:max-w-[250px] 2xl:max-w-[300px] 2xl:max-h-[300px]"
                  />
                  <p className="lg:text-2xl text-xs md:text-lg text-black font-semibold ">
                    Web2
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <Image
                    priority={true}
                    src={WebArrow}
                    alt="Web2-Web3"
                    className="max-w-[34px] sm:max-w-[60px] md:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[100px]"
                  />
                </div>
                <div className="flex justify-center items-center flex-col">
                  <Image
                    priority={true}
                    src={Web3}
                    alt="Web2-Web3"
                    className="max-w-[80px] max-h-[80px] sm:max-w-[120px] sm:max-h-[120px] md:max-w-[200px] md:max-h-[200px] lg:max-h-[200px] lg:max-w-[200px] xl:max-h-[250px] xl:max-w-[250px] 2xl:max-w-[300px] 2xl:max-h-[300px]"
                  />
                  <p className="lg:text-2xl text-xs md:text-lg text-black font-semibold ">
                    web3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-10 lg:mt-20">
        <Link href={"/services"}>
          <div className="h-10 btn-gradient-2 relative px-2 md:w-[180px] md:h-[50px] lg:w-[210px] rounded-full lg:h-[60px] flex gap-2 justify-center items-center">
            <span className="text-[#8E6DFD] md:text-sm lg:text-lg text-xs">
              Marketing Services
            </span>
            <Image
              priority={true}
              src={Arrow}
              width={10}
              height={10}
              alt="ellipse"
              className="w-[7px] h-[10px]"
            />
          </div>
        </Link>
      </div>
    </main>
  );
}
