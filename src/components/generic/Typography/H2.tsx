"use client";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const H2 = ({
  title,
  extraButton,
  descriptionHtml,
  className,
}: {
  title: string;
  extraButton?: {
    title: string;
    url: string;
  };
  descriptionHtml?: string;
  className?: string;
}) => {
  const ExtraButton = () => {
    return (
      <div className="font-bold text-sm uppercase ">
        <Link
          className="self-center flex gap-2 hover:text-m"
          href={extraButton.url}
        >
          {extraButton.title}
          <ArrowRightIcon className="h-6 w-6 text-primary" />
        </Link>
      </div>
    );
  };

  return (
    <div className="mt-24 mb-8">
      <div className="flex gap-x-3 items-center justify-between">
        <h2 className={`font-bold rubik text-4xl sm:text-3xl ${className} `}>
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
