import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

const getSiteData = graphql`
  query {
    site {
      data: siteMetadata {
        title
        description
        author
        image
        twitterUsername
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const {
    site: {
      data: {
        title: siteTitle,
        description: siteDescription,
        author,
        image,
        twitterUsername,
        siteUrl,
      },
    },
  } = useStaticQuery(getSiteData);

  return (
    <Helmet title={title + ' | ' + siteTitle} htmlAttributes={{ lang: 'en' }}>
      <meta name={'description'} content={description || siteDescription} />
      <meta name={'image'} content={image} />

      {/*twitter card*/}
      <meta name={'twitter:card'} content={'summary_large_image'} />
      <meta name={'twitter:creator'} content={twitterUsername} />
      <meta name={'twitter:title'} content={siteTitle} />
      <meta name={'twitter:description'} content={siteDescription} />
      <meta name={'twitter:image'} content={siteUrl + image} />
    </Helmet>
  );
};

export default SEO;
