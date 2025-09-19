"use client";

import { Navbar } from "../Header/navbar";
import logo from "../../../assets/logo.png";
import iso from "../../../assets/iso.png";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { getTranslated } from "@/lib/getTranslated";
import { getMenuItems } from "@/lib/types/MenuItems";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { MenuItem } from "../Header/navbar/menuItem";
import { getContactUsPageSettings } from "@/lib/graphql-api/queries/about";
import { ContactUsPageSettings } from "graphql/generated";

export const Footer = ({ locale, socialItems, logos, address, addressMn }) => {
  const pathname = usePathname();

  const t = useTranslations();
  const cleanedPath = pathname.replace(`/${locale}`, "") || "/";
  const menuItems = getMenuItems(t, cleanedPath);

  return (
    <div className="w-full border-t-30 border-primary pt-8 lg:pt-16 mt-20 pb-5  bottom-0 bg-inherit h-[600px] lg:h-[360px] bg-[#F6F7F9]! m-auto flex flex-col gap-4 lg:gap-10">
      <div
        className={`css-home-container mx-auto 2xl:container flex justify-between flex-col gap-y-4 lg:flex-row
 `}
      >
        <div className="flex flex-col gap-4">
          <Link href={`/${locale}`}>
            <Image
              src={getTranslated(
                locale,
                logos.logoMn.node.mediaItemUrl,
                logos.logo.node.mediaItemUrl
              )}
              width={250}
              height={100}
              sizes="auto"
              alt="logo"
            />
          </Link>

          <div className="flex gap-4">
            {["facebook", "linkedin", "youtube"].map((platform) => (
              <SocialIcon
                key={platform}
                url={socialItems[platform]}
                target="_blank"
                bgColor="transparent"
                fgColor="#1A75BC"
                className="hidden md:block rounded-full bg-[#E8F1F8] hover:bg-primary/20 transition-colors"
                style={{ height: 40, width: 40 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {menuItems.slice(0, 3).map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {menuItems.slice(3, menuItems.length).map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={iso.src}
            width={200}
            height={200}
            alt="logo"
            className="w-16 h-16 "
          />
        </div>
      </div>
      <div className="flex css-home-container mx-auto 2xl:container justify-end p-0">
        {getTranslated(locale, addressMn, address)}
      </div>
    </div>
  );
};
