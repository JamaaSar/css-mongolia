"use client";
import { useTranslations } from "next-intl";
import { MenuItem } from "./menuItem";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { getMenuItems } from "@/lib/types/MenuItems";

export const Navbar = ({ locale, footer = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();
  const cleanedPath = pathname.replace(`/${locale}`, "") || "/";
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const menuItems = getMenuItems(t, cleanedPath);

  return (
    <div
      className={`uppercase text-sm text-color font-medium tracking-[1px]  ${
        footer ? "" : "w-full"
      }`}
    >
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
              ? "flex flex-col gap-y-4 h-[110px] gap-x-[30%] sm:flex-wrap  "
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
