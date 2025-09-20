import { News, NewsIdType, NewsPageSetting } from "graphql/generated";
import { fetchAPI } from "../api";

export async function getNewsLandingPageSettings(): Promise<NewsPageSetting> {
  const data = await fetchAPI(
    `query getNewsLandingPageSettings {
      pageSettings {
        newsPageSetting {
          newsLandingPageExcerpt
          newsLandingPageExcerptMn
          newsLandingPageTitle
          newsLandingPageTitleMn
        }
      }
    }
    `
  );
  return data.pageSettings.newsPageSetting || [];
}

export async function getNewsPosts(): Promise<News[]> {
  const data = await fetchAPI(
    `
    query getAllNews {
    newses(first: 1000,  where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          databaseId
          dateGmt
          slug
          desiredSlug
          newsCustomFields {
            titleMn
            title
            sourceLink
            sourceName
            sourceNameMn
            newsContentType
            newsLanguage
            body
            bodyMn
            featuredImage {
              node {
                  mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
    `
  );
  // parse the data into news objects
  if (data && data.newses && data.newses.edges) {
    if (data.newses.edges.length > 0) {
      return data.newses.edges.map((x) => x.node as News);
    }
  }
  return [];
}

// Detail Pages
export async function getNewsFull(
  id,
  idType: NewsIdType = NewsIdType.Slug
): Promise<News> {
  const data = await fetchAPI(
    `
    query news($id: ID!, $idType: NewsIdType!) {
      news(id: $id, idType: $idType) {
        databaseId
        desiredSlug
        slug
        dateGmt
        newsCustomFields {
          title
          newsLanguage
          titleMn
          body
          bodyMn
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    } 
    `,
    {
      variables: { id, idType },
    }
  ).catch((err) => console.error("Failed to fetch news", err));
  return data.news;
}

export async function getLatestNewsByLanguage(): Promise<{
  english: News[];
  mongolian: News[];
}> {
  const allNews = await getNewsPosts();

  const sortedNews = allNews
    .filter((news) => news.dateGmt)
    .sort(
      (a, b) => new Date(b.dateGmt).getTime() - new Date(a.dateGmt).getTime()
    );

  const getLanguage = (news: News) =>
    news.newsCustomFields?.newsLanguage?.toLowerCase().trim();

  const englishNews = sortedNews
    .filter((news) => {
      const lang = getLanguage(news);
      return lang === "eng" || lang === "both";
    })
    .slice(0, 4);

  const mongolianNews = sortedNews
    .filter((news) => {
      const lang = getLanguage(news);
      return lang === "mn" || lang === "both";
    })
    .slice(0, 4);

  return {
    english: englishNews,
    mongolian: mongolianNews,
  };
}
