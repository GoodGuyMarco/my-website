import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Marco Bartelt",
    author: "Marco Bartelt",
    siteUrl: "https://www.marco-bartelt.de",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marco Bartelt`,
        short_name: `Marco Bartelt`,
        start_url: `/`,
        background_color: `#3E606F`,
        theme_color: `#3E606F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};

export default config;
