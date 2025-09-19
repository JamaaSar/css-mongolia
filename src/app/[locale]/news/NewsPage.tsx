"use client";

import { useState } from "react";
import { NewsCard } from "../../../components/card/NewsCard";
import Pagination from "@/components/generic/Pagination";
import { getTranslated } from "@/lib/getTranslated";
import { News } from "graphql/generated";

export default function NewsPage({ news, locale }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const indexOfLastOrg = currentPage * cardsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - cardsPerPage;

  // Pagination logic
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentNews = news.slice(indexOfFirstOrg, indexOfLastOrg);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {currentNews.map((data: News, i: number) => (
          <NewsCard
            key={data.databaseId + i}
            id={data.databaseId}
            slug={data.slug}
            date={data.dateGmt}
            title={getTranslated(
              locale,
              data.newsCustomFields.titleMn,
              data.newsCustomFields.title
            )}
            featuredImage={
              data.newsCustomFields.featuredImage?.node?.mediaItemUrl
            }
            newsContentType={data.newsCustomFields.newsContentType}
            newsLanguage={data.newsCustomFields.newsLanguage}
            sourceLink={data.newsCustomFields.sourceLink}
            sourceName={getTranslated(
              locale,
              data.newsCustomFields.sourceNameMn,
              data.newsCustomFields.sourceName
            )}
            customSize="h-[270px] max-w-[370px]"
          />
        ))}
      </div>
      <Pagination
        totalOrgs={news.length}
        currentPage={currentPage}
        pagesToDisplay={cardsPerPage}
        paginate={(pageNumber) => paginate(pageNumber)}
      />
    </>
  );
}
