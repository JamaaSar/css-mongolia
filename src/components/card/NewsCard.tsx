"use client";

import {
  CalendarDateRangeIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { videoNewsDialogAtom } from "../../lib/consts/atoms";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { formatDate } from "@/lib/formatDate";

export const NewsCard = ({
  id,
  slug,
  date,
  desiredSlug,
  title,
  customSize,
  featuredImage,
  newsContentType,
  newsLanguage,
  sourceLink,
  sourceName,
}: {
  id: number;
  slug: string;
  date: string;
  desiredSlug?: string;
  title: string;
  customSize?: string;
  featuredImage: string;
  newsContentType: string;
  newsLanguage: string;
  sourceLink: string;
  sourceName: string;
}) => {
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [_, setVideoDialogUrl] = useAtom(videoNewsDialogAtom);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    fetch("https://noembed.com/embed?url=" + sourceLink)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setThumbnailURL(response.thumbnail_url);
      });
  }, [sourceLink]);
  const redirectLocale = () => {
    if (newsLanguage === "both") {
      return locale;
    } else if (newsLanguage === "mn") {
      return "mn";
    }
    return "en";
  };

  const onCardClick = () => {
    const localeString = redirectLocale();

    if (newsContentType) {
      switch (newsContentType.toLowerCase()) {
        case "external":
          window.open(sourceLink, "_blank");
          return;
        case "video":
          setVideoDialogUrl(sourceLink);
          return;
        default:
          router.push(`/${localeString}/news/${id || slug}`);
          return;
      }
    }
  };

  const backgroundImageUrl = () => {
    if (newsContentType === "video") {
      return thumbnailURL;
    }
    return featuredImage;
  };

  return (
    <div
      className={`group relative w-full rounded-md overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]
        ${customSize === null ? "h-[270px]" : customSize}
    `}
      onClick={onCardClick}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
        style={{ backgroundImage: `url(${backgroundImageUrl()})` }}
      />
      <div className="flex flex-col h-full justify-end">
        {newsContentType === "video" && (
          <div className="flex text-red-500 items-center justify-center flex-auto absolute right-0 left-0 top-1/4">
            <PlayCircleIcon className="z-30 mt-1 h-11 w-11 group-hover:mt-0.5 group-hover:h-12 group-hover:w-12 transition-all ease-in-out bg-white rounded-full" />
          </div>
        )}
        <div className="absolute top-3 left-3 bg-secondary text-white rounded-md flex items-center px-3 py-1 text-sm font-semibold gap-2">
          <CalendarDateRangeIcon className="w-6 h-6 text-white" />
          <span className="text-sm">{formatDate(date)}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-0 bg-white opacity-75 group-hover:opacity-90 p-4 h-[90px] transition-opacity duration-300">
          <h2 className="font-medium uppercase text-m line-clamp-3 rubik leading-[20px] group-hover:text-primary transition-colors duration-300">
            {title}
          </h2>

          {/* Hashtags */}
          {/* <div className="flex gap-3 text-xs font-semibold text-primary">
            <span>#economy</span>
            <span>#economy</span>
            <span>#economy</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
