const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const {
    data: {
      tours: { tours },
      posts: { posts },
    },
  } = await graphql(`
    query {
      tours: allContentfulTour {
        tours: nodes {
          slug
        }
      }
      posts: allContentfulPost {
        posts: nodes {
          slug
        }
      }
    }
  `);
  tours.forEach(({ slug }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve(`./src/templates/tour-template.js`),
      context: { slug },
    });
  });
  posts.forEach(({ slug }) => {
    createPage({
      path: `blog/${slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: { slug },
    });
  });
};

