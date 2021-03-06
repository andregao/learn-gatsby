/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Backroads',
    description:
      'explore awesome worldwide tours and discover what makes each of them unique. Forget your daily routine, say yes to adventure',
    author: '@andregao',
    twitterUsername: '@andregao',
    image:'/defaultBcg.jpeg',
    siteUrl:'https://learn-gatsby-cd.netlify.com'
  },
  plugins: [
    `gatsby-plugin-playground`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
  ],
};
