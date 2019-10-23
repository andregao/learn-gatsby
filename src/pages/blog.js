import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import BlogList from '../components/Blog/BlogList';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    blogBcg: file(name: { eq: "blogBcg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const blog = ({
  data: {
    blogBcg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={'Blog'} />
      <StyledHero img={fluid} />
      <BlogList />
    </Layout>
  );
};

export default blog;
