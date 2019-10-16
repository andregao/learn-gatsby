import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';

export const query = graphql`
  query {
    homeHero: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const tours = ({
  data: {
    homeHero: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <StyledHero img={fluid} />
    </Layout>
  );
};

export default tours;
