import React from "react";
import ninetyLogo from "../../assets/ninety_logo.png";
import Image from "next/image";
import { footerLinks, socialLinks } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="flex lg:flex-col w-full bg-deep-dark-blue px-[70px] md:pl-[148px] md:pr-[154px] pb-2 pt-10 md:px-20 lg:px-32 xl:px-44 justify-center md:justify-between font-poppins">
        <div className="flex flex-wrap justify-center 2xl:flex-nowrap 2xl:justify-between">
          <Link
            href={"/"}
            className="mx-auto md:mx-0 md:mr-[183px] xl:mr-[100px] md:pt-12"
          >
            <Image
              priority={true}
              src={ninetyLogo}
              width={231}
              height={160}
              alt="banner"
              className="w-full h-full xl:w-[164px] xl:h-[63px] xl:min-w-[164px] xl:min-h-[63px] object-cover"
            />
          </Link>
          <div className="flex flex-col md:flex-row flex-wrap items-center md:items-center lg:flex-nowrap gap-x-12 pt-6 md:pt-10 pb-8 w-full justify-between">
            {footerLinks.map((elem, key) => {
              return (
                <div
                  key={key}
                  className="w-max min-w-[180px] items-center lg:h-full md:items-start flex flex-col gap-6 pb-6 mb-6 border-b-light-purple border-b md:border-b-0"
                >
                  <div className="text-white font-bold text-base w-max">
                    {elem.title}
                  </div>
                  {elem.categories.map((item, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={item.link}
                        rel="noreferrer"
                        className="text-white font-normal text-base flex items-center gap-3"
                      >
                        {item.icon && <Image src={item.icon} alt="banner" />}{" "}
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="md:pt-[35px] lg:h-full flex-col md:flex-row items-center 2xl:items-start flex 2xl:flex-col gap-[35px] 2xl:ml-10 md:mr-[73px] 2xl:mr-0 pb-3 2xl:pb-0">
            <span className="text-base lg:text-2xl font-normal text-white w-max text-center">
              Follow Us
            </span>
            <div className="flex gap-6">
              {socialLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block cursor-pointer "
                >
                  <Image
                    priority={true}
                    src={item.image}
                    alt="banner"
                    className="max-w-[31px]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-[11px] text-white flex justify-center md:justify-between flex-wrap gap-4 md:gap-0 border-t-[1px] md:text-[13px] lg:text-xl px-[39px] md:pl-[148px] md:pr-[154px] md:px-20 lg:px-32 xl:px-48 pt-[22px] pb-[30px] border-lightPurple">
        <span>
          ninety3 © Copyright {new Date().getFullYear()} All Rights Reserved{" "}
        </span>
        <div className="flex gap-3">
          <span>Created by</span>
          <Image
            priority={true}
            src={ninetyLogo}
            width={84}
            height={59}
            alt="banner"
            className="w-[53px] lg:w-[84px]"
          />
        </div>
      </div>
    </div>
  );
}
