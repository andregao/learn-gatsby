import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const {
    site: {
      siteMetadata: { title, author, description },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Author: {author}</h1>
    </div>
  );
};

export default Header;
