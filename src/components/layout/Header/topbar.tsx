"use client";
import { SOCIAL_URLS } from "../../../lib/consts/urls";
import { SocialIcon } from "react-social-icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuButton,
  MenuItems,
  Transition,
  MenuItem,
} from "@headlessui/react";
import { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

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

export const Topbar = ({ locale, socialItems }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 724 });
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.replace(segments.join("/")); // ⬅️ faster than push()
  };
  const getURL = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;

    const urlWithParams = segments.join("/");

    return urlWithParams;
  };
  return (
    <div className="flex justify-end gap-4 sm:gap-10">
      <div className="flex gap-4">
        <SocialIcon
          url={socialItems.facebook}
          target="_blank"
          bgColor="transparent"
          fgColor="#030C13"
          className={`hover:bg-black/10 rounded-full hidden md:block bg-black/10 `}
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url={socialItems.linkedin}
          target="_blank"
          bgColor="transparent"
          fgColor="#030C13"
          className={`hover:bg-black/10 rounded-full hidden md:block bg-black/10 `}
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url={socialItems.youtube}
          target="_blank"
          bgColor="transparent"
          fgColor="#030C13"
          className={`hover:bg-black/10 rounded-full hidden md:block bg-black/10 `}
          style={{ height: 40, width: 40 }}
        />
      </div>

      {isMobile ? (
        <Menu
          as="div"
          className="relative inline-flex items-center justify-center"
        >
          <MenuButton className="flex w-full items-center justify-cente bg-secondary text-white font-medium text-center text-sm  py-2 px-4">
            <div>{availableOptions[locale].label}</div>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </MenuButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute top-10 right-0 py-2 px-4 bg-white shadow-lg w-[115px] h-[40px]">
              <div className="px-1 py-1">
                {Object.keys(availableOptions)
                  .filter((x) => x != locale)
                  .map((key) => {
                    const option: Option = availableOptions[key];

                    return (
                      <MenuItem key={key}>
                        {({ active }) => (
                          <Link
                            className={`${
                              active && "text-white bg-secondary"
                            } justify-center w-full group flex items-center text-sm `}
                            href={getURL(key)}
                            locale={key}
                            scroll={false}
                          >
                            {option.label}
                          </Link>
                        )}
                      </MenuItem>
                    );
                  })}
              </div>
            </MenuItems>
          </Transition>
        </Menu>
      ) : (
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
      )}
    </div>
  );
};
