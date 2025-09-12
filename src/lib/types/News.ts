export type NewsItem = {
  id: string;
  newsCustomFields: {
    title: string;
    titleMn?: string;
    excerpt: string;
    excerptMn?: string;
    featuredImage: { node: { mediaItemUrl: string } };
    newsContentType: string;
    newsLanguage: "en" | "mn" | "both";
    sourceLink: string;
    sourceName: string;
    sourceNameMn?: string;
  };
};
