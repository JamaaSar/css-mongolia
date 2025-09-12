"use client";
import { useEffect, useState } from "react";
import { SOCIAL_URLS } from "../../../lib/consts/urls";
import { SocialIcon } from "react-social-icons";
import { usePathname, useRouter } from "next/navigation";

type Option = {
  value: string;
  label: string;
};

type Options = {
  [key: string]: Option;
};

const availableOptions: Options = {
  en: { value: "en", label: "ENGLISH" },
  mn: { value: "mn", label: "МОНГОЛ" },
};

const socialUrls: string[] = [
  SOCIAL_URLS.FACEBOOK,
  SOCIAL_URLS.LINKEDIN,
  SOCIAL_URLS.YOUTUBE,
];

export const Topbar = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.replace(segments.join("/")); // ⬅️ faster than push()
  };
  return (
    <div className="flex justify-end gap-10">
      <div className="flex gap-4">
        {socialUrls.map((x, idx) => {
          return (
            <SocialIcon
              url={x}
              target="_blank"
              key={idx}
              bgColor="transparent"
              fgColor="#030C13"
              className={`hover:bg-black/10 rounded-full hidden md:block bg-black/10 `}
              style={{ height: 40, width: 40 }}
            />
          );
        })}
      </div>

      <div className="flex gap-4 rubik font-medium text-center text-sm">
        {Object.keys(availableOptions).map((key) => {
          const option = availableOptions[key];
          return (
            <button
              className={`${
                locale == key && "bg-secondary  text-white "
              } py-2 px-4 hover:bg-secondary hover:text-white`}
              key={key}
              onClick={() => handleLanguageChange(key)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
