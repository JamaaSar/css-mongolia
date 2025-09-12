"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { JSX, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

type MenuItemProps = {
  title: string | JSX.Element;
  href?: string;
  isActive: boolean;
  target?: string;
  children?: JSX.Element;
};

export const MenuItem = (props: MenuItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 820 });
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = (event) => {
    setIsDropdownOpen(true);
    clearTimeout(delayHandler);
  };

  const handleMouseLeave = () => {
    setDelayHandler(setTimeout(() => setIsDropdownOpen(false), 500));
  };

  return (
    <div
      className="relative rubik"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between text-sm">
        <Link
          className={`hover:text-secondary font-medium  
            ${props.isActive && " text-secondary"}`}
          href={props.href}
          target={props.target}
        >
          {props.title}
          {props.isActive}
        </Link>
      </div>
    </div>
  );
};
