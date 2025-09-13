"use client";
import { useTranslations } from "next-intl";
import { MenuItem } from "./menuItem";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Navbar = ({ locale, footer = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const cleanedPath = pathname.replace(`/${locale}`, "") || "/";
  const isMobile = useMediaQuery({ maxWidth: 820 });

  const menuItems = [
    { title: t("menu.homepage"), href: "/", isActive: cleanedPath === "/" },
    {
      title: t("menu.newspage"),
      href: "/news",
      isActive: cleanedPath.includes("news"),
    },
    {
      title: t("menu.project"),
      href: "/project",
      isActive: cleanedPath.includes("project"),
    },
    {
      title: t("menu.resource"),
      href: "/resource",
      isActive: cleanedPath.includes("resource"),
    },
    {
      title: t("menu.about-us"),
      href: "/about-us",
      isActive: cleanedPath.includes("about-us"),
    },
    {
      title: t("menu.contact-us"),
      href: "/contact-us",
      isActive: cleanedPath.includes("contact-us"),
    },
  ];

  return (
    <div className="uppercase text-sm text-color font-medium tracking-[1px] w-full ">
      {isMobile && !footer ? (
        <>
          <div
            className="flex items-center justify-end pl-1 lg:hidden"
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </div>
          <div
            id="mobile-menu"
            className={`
        ${
          isMenuOpen
            ? "-translate-x-50 bg-white w-full top-32 lg:hidden fixed py-10 flex flex-col gap-7 h-full z-30 px-10 uppercase text-lg tracking-widest transition-all ease-in-out duration-200 overflow-x-hidden"
            : "-translate-x-full hidden"
        }`}
          >
            {menuItems.map((item, i) => (
              <div key={i} onClick={() => setMenuOpen(false)}>
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          className={` ${
            footer
              ? "flex flex-col justify-between gap-y-4 gap-x-20 sm:flex-wrap max-w-[324px]"
              : "flex gap-10 sm:gap-x-5 justify-end"
          } `}
        >
          {menuItems.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
