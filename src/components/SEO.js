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

  title = title
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
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

      {/*facebook card*/}
      <meta property={'og:url'} content={siteUrl} />
      <meta property={'og:type'} content={'website'} />
      <meta property={'og:title'} content={siteTitle} />
      <meta property={'og:description'} content={siteDescription} />
      <meta property={'og:image'} content={siteUrl + image} />
      <meta property={'og:image:width'} content={'400'} />
      <meta property={'og:image:height'} content={'300'} />
    </Helmet>
  );
};

export default SEO;
