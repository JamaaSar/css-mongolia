import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}
const wordpressDomain = new URL(process.env.WORDPRESS_API_URL).hostname;

const nextConfig: NextConfig = {
  images: {
    domains: [
      wordpressDomain, // Valid WP Image domain.
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "secure.gravatar.com",
    ],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
