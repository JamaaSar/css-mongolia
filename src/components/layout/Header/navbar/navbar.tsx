"use client";
import { useTranslations } from "next-intl";
import { MenuItem } from "./menuItem";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = ({ locale, footer }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname.toLowerCase();
  const t = useTranslations();
  const cleanedPath = pathname.replace(`/${locale}`, "") || "/";

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
    // {
    //   title: t("menu.resource"),
    //   href: "/resource",
    //   isActive: cleanedPath.includes("resource"),
    // },
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
    <div className="uppercase text-sm text-color font-medium">
      <div
        className={` ${
          footer
            ? "h-[100px] flex flex-col gap-y-4 gap-x-20 flex-wrap"
            : "flex gap-10 justify-end"
        } `}
      >
        {menuItems.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>
      {/* <div
        id="mobile-menu"
        className={`bg-white w-full lg:hidden fixed py-10 flex flex-col gap-7 h-full z-30 px-10 
        uppercase text-lg tracking-widest
        transition-all ease-in-out duration-200 overflow-x-hidden
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MenuItem title={t("menu.homepage")} href="/" isActive={path == "/"} />
        <MenuItem
          title={t("menu.newspage")}
          href="/news"
          isActive={path.includes("news")}
        />
        <MenuItem
          title={t("menu.about-us")}
          href="/about"
          isActive={path.includes("about")}
        />
      </div> */}
    </div>
  );
};
