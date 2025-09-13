"use client";

import { Navbar } from "../Header/navbar";
import logo from "../../../assets/logo.png";
import iso from "../../../assets/iso.png";

import Image from "next/image";
import { SOCIAL_URLS } from "@/lib/consts/urls";
import { SocialIcon } from "react-social-icons";
import { useMediaQuery } from "react-responsive";

const socialUrls: string[] = [
  SOCIAL_URLS.FACEBOOK,
  SOCIAL_URLS.LINKEDIN,
  SOCIAL_URLS.YOUTUBE,
];

export const Footer = ({ locale }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w-full border-t-30 border-primary p-20 mt-20 pb-5 bottom-0 bg-inherit  h-[620px] sm:h-[320px] bg-[#F6F7F9]! m-auto">
      <div
        className={`flex mx-auto m-auto justify-center ${
          isMobile
            ? "flex-col gap-10"
            : "flex-row gap-28 items-center content-center "
        }`}
      >
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
          <p className="max-w-[440px] text-wrap">
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
