"use client";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const H1 = ({
  title,
  descriptionHtml,
  className,
}: {
  title: string;
  descriptionHtml?: string;
  className?: string;
}) => {
  return (
    <div className="mt-4 ">
      <h1
        className={`font-bold rubik text-2xl md:text-[32px] rubik ${className} `}
      >
        {title}
      </h1>
      {descriptionHtml && (
        <div
          className="mt-2 pt-4 mb-5 text-m sm:text-lg md:text-xl"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        ></div>
      )}
    </div>
  );
};
