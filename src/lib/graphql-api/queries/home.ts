import { fetchAPI } from "../api";
import { HomePageSetting, MenuItem, SocialMedia } from "graphql/generated";

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
              bannerText
              bannerTextMn

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
                    newsContentType
                    newsLanguage
                    sourceLink
                    sourceName
                    sourceNameMn
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

  return data.pageSettings.menuAction.menuItems || [];
}
export async function getLogo(): Promise<unknown> {
  const data = await fetchAPI(
    `
    query homePageSettingsQuery {
      homePageSettings {
        homePageSetting{
            logo {
              node {
                mediaItemUrl
              }
            }
                  logoMn {
              node {
                mediaItemUrl
              }
            }
        }
      }
    }
    `
  );
  return data.homePageSettings.homePageSetting;
}
