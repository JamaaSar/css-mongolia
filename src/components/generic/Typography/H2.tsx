"use client";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const H2 = ({
  title,
  extraButton,
  descriptionHtml,
  className,
  marginTop = true,
}: {
  title: string;
  extraButton?: {
    title: string;
    url: string;
  };
  descriptionHtml?: string;
  className?: string;
  marginTop?: boolean;
}) => {
  const ExtraButton = () => {
    return (
      <div className="font-bold text-xs md:text-sm uppercase">
        <Link
          className="self-center flex  items-center gap-2 hover:text-m whitespace-nowrap "
          href={extraButton.url}
        >
          {extraButton.title}
          <ArrowRightIcon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
        </Link>
      </div>
    );
  };

  return (
    <div className={`${marginTop ? "mt-24" : ""}  mb-8`}>
      <div className="flex gap-x-3 items-center justify-between">
        <h2 className={`font-bold rubik text-xl md:text-3xl ${className} `}>
          {title}
        </h2>
        {extraButton && <ExtraButton />}
      </div>
      {descriptionHtml && (
        <div
          className="mt-2 pt-4 mb-5 text-zinc-600"
          dangerouslySetInnerHTML={{ __html: descriptionHtml }}
        ></div>
      )}
    </div>
  );
};
