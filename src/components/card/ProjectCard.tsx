"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const ProjectCard = ({
  id,
  slug,
  title,
  excerpt,
  featuredImage,
}: {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
}) => {
  const router = useRouter();
  const locale = useLocale();

  const onCardClick = () => {
    router.push(`/${locale}/project/${id || slug}`);
    return;
  };

  return (
    <div
      className="group w-[370px] min-w-[370px] rounded-md overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300  hover:shadow-xl"
      onClick={onCardClick}
    >
      <div className="relative">
        <div
          className="bg-cover bg-center w-full h-[480px] transition-transform duration-300  group-hover:brightness-75"
          style={{ backgroundImage: `url(${featuredImage})` }}
        >
          <div className="flex flex-col h-full justify-end">
            <div className="absolute top-3 left-3 bg-secondary text-white rounded-md flex items-center px-3 py-1 text-sm font-semibold gap-2 transition-all duration-300 group-hover:bg-primary">
              <span className="text-sm">{title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-4 left-4 right-0 bg-white opacity-75 p-4 h-[130px] group-hover:opacity-90 transition-opacity duration-300">
        <h2 className="font-medium uppercase text-m line-clamp-2 rubik leading-[20px] group-hover:text-primary transition-colors duration-300">
          {title}
        </h2>
        {/* <div className="flex gap-3 text-xs font-semibold text-primary">
          <span>#economy</span>
          <span>#economy</span>
          <span>#economy</span>
        </div> */}

        <p className="text-m mt-1 line-clamp-4 leading-[20px]">{excerpt}</p>
      </div>
    </div>
  );
};
