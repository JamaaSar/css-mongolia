"use client";

import { Navbar } from "../Header/navbar";
import logo from "../../../assets/logo.png";
import iso from "../../../assets/iso.png";

import Image from "next/image";
import { SOCIAL_URLS } from "@/lib/consts/urls";
import { SocialIcon } from "react-social-icons";

const socialUrls: string[] = [
  SOCIAL_URLS.FACEBOOK,
  SOCIAL_URLS.LINKEDIN,
  SOCIAL_URLS.YOUTUBE,
];

export const Footer = ({ locale }) => {
  return (
    <div className="w-full flex border-t-30 border-primary p1-20 mt-20 pb-5 bottom-0 bg-inherit h-[320px] bg-[#F6F7F9]! ">
      <div className="flex gap-28 mx-auto items-center">
        <div className="flex flex-col gap-4">
          <Image
            src={logo.src}
            width={250}
            height="58"
            alt="logo"
            className="w-[250px] h-[58px] "
          />
          <Image
            src={iso.src}
            width={250}
            height="250"
            alt="logo"
            className="w-[80px] h-[80px] "
          />
        </div>
        <Navbar locale={locale} footer={true} />
        <div className="flex flex-col gap-8">
          <p className="w-[440px]">
            Монгол Улс, Улаанбаатар 15160, Чингэлтэй дүүрэг, 1-р хороо,
            Энхтайваны өргөн чөлөө-4, Экспресс Тауэр 701-2.
          </p>
          <div className="flex gap-4">
            {socialUrls.map((x, idx) => {
              return (
                <SocialIcon
                  url={x}
                  target="_blank"
                  key={idx}
                  bgColor="transparent"
                  fgColor="#1A75BC"
                  className={`hover:bg-black/10 rounded-full hidden md:block bg-[#E8F1F8] `}
                  style={{ height: 40, width: 40 }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
