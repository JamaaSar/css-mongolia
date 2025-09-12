import { fetchAPI } from "../api";
import { HomePageSetting } from "graphql/generated";

export async function getHomePage(): Promise<HomePageSetting> {
  const data = await fetchAPI(
    `
    query homePageSettingsQuery {
      homePageSettings {
        homePageSetting{
          title
          titleMn
          excerpt
          excerptMn
          banners {
            bannerImage {
              node {
                mediaItemUrl
              }
            }
          }
          newsSection {
            newsTitle
            newsTitleMn
            featuredNews {
              nodes {
                ... on News {
                  desiredSlug
                  slug
                  dateGmt
                  databaseId
                  newsCustomFields {
                    excerpt
                    excerptMn
                    newsContentType
                    newsLanguage
                    sourceLink
                    sourceName
                    sourceNameMn
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
          projectSection {
            projectTitle
            projectTitleMn
            featuredProject {
              nodes {
                ... on Project {
                  databaseId
                  title
                  projectCustomFields {
                    excerpt
                    excerptMn
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
          ressourceSection {
            ressourceTitle
            ressourceTitleMn
            ressourceExcerptMn
            ressource
            featuredRessource {
              nodes {
                ... on Resource {
                  databaseId
                  resourceCustomField {
                    excerpt
                    excerptMn
                    title
                    titleMn
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
        }
      }
    }
    `
  );
  return data.homePageSettings.homePageSetting;
}
