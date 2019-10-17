const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const {
    data: {
      tours: { tours },
    },
  } = await graphql(`
    query {
      tours: allContentfulTour {
        tours: nodes {
          slug
        }
      }
    }
  `);
  tours.forEach(({ slug }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve(`./src/templates/tour-template.js`),
      context: {
        slug,
      },
    });
  });
};
