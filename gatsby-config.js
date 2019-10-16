/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'backroads',
    description:
      'explore awesome worldwide tours and discover what makes each of them unique. Forget your daily routine, say yes to adventure',
    author: '@andregao',
    data: ['a', 'b'],
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
