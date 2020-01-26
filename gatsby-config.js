require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Wcisco Portfolio`,
    description: `Sissoko`,
    author: `Williams Sissoko`,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME, // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_VARIABLE,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-source-quote-williams-sissoko`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: process.env.AMPLITUDE_API_KEY,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
