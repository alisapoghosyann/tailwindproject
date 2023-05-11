import Link from "next/link";
import Arrow from "../../../assets/digital/arrow.png";
import Image from "next/image";
import Web2Web3 from "../../../assets/marketing/web2-web3.png";

export default function WebMarket() {
  return (
    <main className="min-h-[317px] md:min-h-[414px] h-full lg:min-h-[700px] lg:px-36 md:px-20 pb-20 px-10 pt-9 md:pt-[60px] bg-[#f5f5f5]">
      <h2 className="title-gradient mx-auto text-[22px] lg:mx-0 md:text-[40px] lg:text-[80px] font-bold pb-5 lg:pb-20 w-max">
        Web2 to Web3 experts
      </h2>
      <div className="flex flex-col gap-5 lg:gap-16 items-center md:items-start justify-between">
        <p className="text-xs leading-5 text-center md:text-base lg::text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
          We specialise in helping companies with an interest in delving into
          the world of Web3 and emerging technology. Our specialised team with
          deep Web3 and blockchain knowledge helps businesses leverage these
          emerging technologies to create unique and impactful digital customer
          experiences. We can help you develop concepts or connect with other
          projects across: NFT’s Metaverse Gaming DeFi Token generation
          Blockchain
        </p>
        <div className="w-full">
          <p className="text-xs leading-5 text-left md:text-base lg::text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
            We can help you develop concepts or connect with other projects
            across:
            <br />
            <br />
          </p>
          <div className="flex w-full sm:items-center flex-col justify-center sm:flex-row sm:justify-between md:pr-14">
            <ul className="list-disc pl-4 text-xs leading-5 text-left md:text-base lg::text-2xl text-dark-grey font-light lg:text-left lg:pr-24">
              <li>NFT’s</li>
              <li>Metaverse</li>
              <li>Gaming</li>
              <li>DeFi</li>
              <li>Token generation</li>
              <li>Blockchain</li>
            </ul>
            <div className="flex-col flex w-max">
              <Image
                src={Web2Web3}
                alt="Web2-Web3"
                className="max-w-[250px] lg:max-w-[450px] xl:max-w-[500px]"
              />
              <div className="w-full flex justify-between px-10 items-center">
                <p className="lg:text-2xl text-xs md:text-lg text-black font-semibold ">
                  Web2
                </p>
                <p className="lg:text-2xl text-xs md:text-lg text-black font-semibold ">
                  web3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-10 lg:mt-20">
        <Link href={""}>
          <div className="h-10 btn-gradient-2 relative px-2 md:w-[180px] md:h-[50px] lg:w-[210px] rounded-full lg:h-[60px] flex gap-2 justify-center items-center">
            <span className="text-[#8E6DFD] md:text-sm lg:text-lg text-xs">
              Marketing Services
            </span>
            <Image
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
