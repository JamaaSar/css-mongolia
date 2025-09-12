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
    newses(first: 1000) {
      edges {
        node {
          databaseId
          dateGmt
          slug
          desiredSlug
          newsCustomFields {
            titleMn
            title
            excerpt
            excerptMn
            sourceLink
            sourceName
            sourceNameMn
            newsContentType
            newsLanguage
            body
            bodyMn
            featuredImage {
              node {
                mediaDetails {
                  sizes(include: [MEDIUM, MEDIUM_LARGE]) {
                    sourceUrl
                    name
                  }
                }
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
          titleMn
          body
          bodyMn
          excerpt
          excerptMn
          featuredImage {
            node {
              mediaDetails {
                sizes(include: [MEDIUM, MEDIUM_LARGE, LARGE]) {
                  name
                  sourceUrl
                }
              }
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

export async function getLastThree(): Promise<News[]> {
  const data = await fetchAPI(
    `
    query getLatestNews {
      newses(where: {orderby: {order: DESC, field: DATE}}, first: 3) {
        edges {
          node {
            databaseId
            slug
            date
            dateGmt
            newsCustomFields {
              titleMn
              title
              sourceLink
              sourceName
              sourceNameMn
              sourceLanguage
              newsContentType
              featuredImage {
                image {
                  node {
                    mediaItemUrl
                    mediaDetails {
                      sizes(include: [MEDIUM, MEDIUM_LARGE]) {
                        name
                        sourceUrl
                      }
                    }
                  }
                }
                imageMn {
                  node {
                    mediaItemUrl
                    mediaDetails {
                      sizes(include: [MEDIUM, MEDIUM_LARGE]) {
                        name
                        sourceUrl
                      }
                    }
                  }
                }
                caption
                captionMn
              }
            }
            featuredImage {
              node {
                id
                mediaItemUrl
                mediaDetails {
                  sizes(include: [MEDIUM, MEDIUM_LARGE]) {
                    name
                    sourceUrl
                  }
                }
              }
            }
            categories {
              nodes {
                categoryCustomFields {
                  name
                  nameMn
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return data.newses && data.newses.edges
    ? data.newses.edges.map((x) => x.node as News)
    : [];
}
