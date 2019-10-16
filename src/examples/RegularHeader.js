import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({
        site: {
          siteMetadata: { title, author, description },
        },
      }) => {
        return (
          <div>
            <h1>Title: {title}</h1>
            <h1>Author: {author}</h1>
          </div>
        );
      }}
    />
  );
};

export default RegularHeader;
