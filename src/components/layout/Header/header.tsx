"use client";

import { Navbar } from "./navbar";
import { Topbar } from "./topbar";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const Header = ({ locale }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div className="w-full absolute sticky top-0 z-50 flex flex-col gap-4 px-4 py-4 sm:justify-between sm:flex-row sm:gap-10 sm:px-10 items-center h-[140px] bg-white">
      {isMobile ? (
        <>
          <div className="justify-end w-full">
            <Topbar locale={locale} />
          </div>
          <div className="flex justify-between w-full items-center">
            <Image
              src={logo.src}
              width={250}
              height="58"
              alt="logo"
              className="w-[250px] h-[58px] place-self-start"
            />
            <Navbar locale={locale} footer={false} />
          </div>
        </>
      ) : (
        <>
          <Image
            src={logo.src}
            width={250}
            height="58"
            alt="logo"
            className="w-[250px] h-[58px]"
          />
          <div className="flex flex-col gap-8 justify-end">
            <Topbar locale={locale} />
            <Navbar locale={locale} footer={false} />
          </div>
        </>
      )}
    </div>
  );
};
