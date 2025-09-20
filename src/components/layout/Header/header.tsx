"use client";

import { Navbar } from "./navbar";
import { Topbar } from "./topbar";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Link } from "@/i18n/navigation";
import { getTranslated } from "@/lib/getTranslated";

export const Header = ({ locale, socialItems, logos }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="w-full absolute sticky top-0 z-50 flex flex-col gap-2 px-4 py-4 sm:justify-between sm:flex-row sm:gap-10 md:px-8 items-center h-[140px] bg-white">
      {isMobile ? (
        <>
          <div className="justify-end w-full">
            <Topbar locale={locale} socialItems={socialItems} />
          </div>
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              <Image
                src={getTranslated(
                  locale,
                  logos.logoMn.node.mediaItemUrl,
                  logos.logo.node.mediaItemUrl
                )}
                width={350}
                height={150}
                sizes="auto"
                alt="logo"
              />
            </Link>

            <Navbar locale={locale} footer={false} />
          </div>
        </>
      ) : (
        <>
          <Link href="/">
            <Image
              src={getTranslated(
                locale,
                logos.logoMn.node.mediaItemUrl,
                logos.logo.node.mediaItemUrl
              )}
              width={350}
              height={150}
              sizes="auto"
              alt="logo"
            />
          </Link>

          <div className="flex flex-col gap-8 justify-end">
            <Topbar locale={locale} socialItems={socialItems} />
            <Navbar locale={locale} footer={false} />
          </div>
        </>
      )}
    </div>
  );
};
