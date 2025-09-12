"use client";

import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export const RessourceCard = ({
  title,
  excerpt,
  featuredImage,
}: {
  title: string;
  excerpt: string;
  featuredImage: string;
}) => {
  const [thumbnailURL, setThumbnailURL] = useState("");

  //   useEffect(() => {
  //     fetch("https://noembed.com/embed?url=" + sourceLink)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((response) => {
  //         setThumbnailURL(response.thumbnail_url);
  //       });
  //   }, [news]);

  const onCardClick = () => {
    // if (transformedNews.newsContentType) {
    //   switch (transformedNews.newsContentType.toLowerCase()) {
    //     case "external":
    //       if (i18n.language !== transformedNews.sourceLanguage) {
    //         router.push(
    //           `/news/${
    //             transformedNews.desiredSlug ||
    //             transformedNews.slug ||
    //             transformedNews.id
    //           }`
    //         );
    //         return;
    //       }
    //       window.open(transformedNews.sourceLink, "_blank");
    //       return;
    //     case "video":
    //       setVideoDialogUrl(transformedNews.sourceLink);
    //       return;
    //     default:
    //       router.push(
    //         `/news/${
    //           transformedNews.desiredSlug ||
    //           transformedNews.slug ||
    //           transformedNews.id
    //         }`
    //       );
    //       return;
    //   }
    // }
  };

  return (
    <div className="relative h-[240px] w-[420px] rounded-md overflow-hidden shadow-lg cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${featuredImage})` }}
        onClick={onCardClick}
      />
      <div className="flex flex-col h-full justify-end">
        <div className="absolute top-3 left-3 bg-secondary text-white rounded-md flex items-center px-3 py-1 text-sm font-semibold gap-2 z-20">
          <CalendarDateRangeIcon className="w-6 h-6 text-white" />
          <span className="text-sm">01/01/2024</span>
        </div>
        <div className="absolute top-0 right-0  bg-gradient-to-t from-black/80 to-black/0 via-black/50 z-10  h-full w-full" />
        <div className="absolute z-20 top-1/3 p-4 text-white">
          {/* Title */}
          <h2 className="font-medium uppercase text-m line-clamp-2 rubik leading-[20px]">
            {title}
          </h2>

          <p className="text-m mt-1 line-clamp-4 leading-[20px]">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};
