"use client";

import { getTranslated } from "@/lib/getTranslated";
import { NewsCard } from "../card/NewsCard";
import { H2 } from "../generic/Typography";
import { useLocale, useTranslations } from "next-intl";
import { News } from "graphql/generated";

export const NewsSection = ({
  title,
  news,
}: {
  title: string;
  news: News[];
}) => {
  const locale = useLocale();
  const t = useTranslations();

  const filteredNews = news.filter((item) => {
    const lang = item.newsCustomFields.newsLanguage;
    return lang === "both" || lang === locale;
  });
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
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "270px repeat(1, 270px)",
        }}
      >
        {filteredNews[0] && (
          <div className="col-span-1 row-span-2">
            <NewsCard
              key={filteredNews[0].id}
              id={filteredNews[0].databaseId}
              slug={filteredNews[0].slug}
              date={filteredNews[0].dateGmt}
              title={getTranslated(
                locale,
                filteredNews[0].newsCustomFields.titleMn,
                filteredNews[0].newsCustomFields.title
              )}
              excerpt={getTranslated(
                locale,
                filteredNews[0].newsCustomFields.excerptMn,
                filteredNews[0].newsCustomFields.excerpt
              )}
              featuredImage={
                filteredNews[0].newsCustomFields.featuredImage.node.mediaDetails
                  .sizes !== null
                  ? filteredNews[0].newsCustomFields.featuredImage?.node
                      .mediaDetails?.sizes[0].sourceUrl
                  : ""
              }
              newsContentType={filteredNews[0].newsCustomFields.newsContentType}
              newsLanguage={filteredNews[0].newsCustomFields.newsLanguage}
              sourceLink={filteredNews[0].newsCustomFields.sourceLink}
              sourceName={getTranslated(
                locale,
                filteredNews[0].newsCustomFields.sourceNameMn,
                filteredNews[0].newsCustomFields.sourceName
              )}
              customSize="h-full"
            />
          </div>
        )}
        {filteredNews.map((data: News, index: number) => (
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
              data.newsCustomFields.featuredImage?.node?.mediaDetails.sizes !==
              null
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
