require("dotenv").config({
  path: `.env`,
})
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby for Starter `,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@tienpm24`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, "./src"),
          "@components": path.resolve(__dirname, "./src/components"),
          "@adapters": path.resolve(__dirname, "./src/packages/core/adapters"),
          "@base": path.resolve(__dirname, "./src/packages/base"),
          "@graphql": path.resolve(__dirname, "./src/graphql"),
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
