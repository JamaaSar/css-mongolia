import { fetchAPI } from "../api";
import {
  AboutUsPageSetting,
  HomePageSetting,
  MenuAction,
  MenuItem,
  SocialMedia,
} from "graphql/generated";

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
                    title
                    titleMn
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
                    projectLanguage
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

export async function getSocialMedia(): Promise<SocialMedia> {
  const data = await fetchAPI(
    `query getSocialMedia {
      pageSettings {
        socialMedia {
          facebook
          linkedin
          youtube
        }
      }
    }
    `
  );
  return data.pageSettings.socialMedia || [];
}

export async function getMenuActions(): Promise<MenuItem[]> {
  const data = await fetchAPI(
    `query getSocialMedia {
      pageSettings {
        menuAction {
          menuItems {
            menuItem
            menuItemMn
          }
        }
      }
    }
    `
  );
  console.log(
    "data.pageSettings.menuAction.menuItems",
    data.pageSettings.menuAction.menuItems
  );
  return data.pageSettings.menuAction.menuItems || [];
}
