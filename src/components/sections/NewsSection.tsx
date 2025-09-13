"use client";

import { getTranslated } from "@/lib/getTranslated";
import { NewsCard } from "../card/NewsCard";
import { H2 } from "../generic/Typography";
import { useLocale, useTranslations } from "next-intl";
import { News } from "graphql/generated";
import { useMediaQuery } from "react-responsive";

export const NewsSection = ({
  title,
  news,
}: {
  title: string;
  news: News[];
}) => {
  const locale = useLocale();
  const t = useTranslations();
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const sliceNumber = isTablet ? 0 : 1;
  const filteredNews = news.filter((item) => {
    const lang = item.newsCustomFields.newsLanguage;
    return lang === "both" || lang === locale;
  });

  const numberOfCardsToShow = isTablet
    ? 4
    : filteredNews.length == 6
    ? 6
    : filteredNews.length;

  const numberOfGrid = filteredNews.length > 4 ? 4 : filteredNews.length;
  const extraButton = {
    title: t("see-more"),
    url: "/news",
  };
  return (
    <div>
      <H2 title={title} extraButton={extraButton} />

      <div
        className="grid grid-cols-3 grid-rows-2 gap-4"
        style={{
          gridTemplateColumns: `${
            isMobile ? "1fr" : isTablet ? "1fr 1fr " : "1fr 1fr 1fr"
          }`,
          gridTemplateRows: `${
            isMobile
              ? `${
                  numberOfGrid === 1
                    ? "270px"
                    : `270px repeat(${numberOfGrid - 1}, 270px)`
                }`
              : `${numberOfGrid <= 2 ? "270px" : "270px repeat(1, 270px)"}`
          }`,
        }}
      >
        {filteredNews.slice(0, sliceNumber).map((data: News, index: number) => (
          <div key={data.databaseId + index} className="col-span-1 row-span-2">
            <NewsCard
              id={data.databaseId}
              slug={data.slug}
              date={data.dateGmt}
              title={getTranslated(
                locale,
                data.newsCustomFields.titleMn,
                data.newsCustomFields.title
              )}
              excerpt={getTranslated(
                locale,
                data.newsCustomFields.excerptMn,
                data.newsCustomFields.excerpt
              )}
              featuredImage={
                data.newsCustomFields.featuredImage?.node?.mediaDetails
                  .sizes !== null
                  ? data.newsCustomFields.featuredImage.node?.mediaDetails
                      ?.sizes[0].sourceUrl
                  : ""
              }
              newsContentType={data.newsCustomFields.newsContentType}
              newsLanguage={data.newsCustomFields.newsLanguage}
              sourceLink={data.newsCustomFields.sourceLink}
              sourceName={getTranslated(
                locale,
                data.newsCustomFields.sourceNameMn,
                data.newsCustomFields.sourceName
              )}
              customSize="h-full"
            />
          </div>
        ))}

        {filteredNews
          .slice(sliceNumber, numberOfCardsToShow)
          .map((data: News, index: number) => (
            <NewsCard
              key={data.databaseId + index}
              id={data.databaseId}
              slug={data.slug}
              date={data.dateGmt}
              title={getTranslated(
                locale,
                data.newsCustomFields.titleMn,
                data.newsCustomFields.title
              )}
              excerpt={getTranslated(
                locale,
                data.newsCustomFields.excerptMn,
                data.newsCustomFields.excerpt
              )}
              featuredImage={
                data.newsCustomFields.featuredImage?.node?.mediaDetails
                  .sizes !== null
                  ? data.newsCustomFields.featuredImage.node?.mediaDetails
                      ?.sizes[0].sourceUrl
                  : ""
              }
              newsContentType={data.newsCustomFields.newsContentType}
              newsLanguage={data.newsCustomFields.newsLanguage}
              sourceLink={data.newsCustomFields.sourceLink}
              sourceName={getTranslated(
                locale,
                data.newsCustomFields.sourceNameMn,
                data.newsCustomFields.sourceName
              )}
            />
          ))}
      </div>
    </div>
  );
};
