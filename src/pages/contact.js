import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    connectBcg: file(name: { eq: "connectBcg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const contact = ({
  data: {
    connectBcg: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={'Contact'} />
      <StyledHero img={fluid} />
      <Contact />
    </Layout>
  );
};

export default contact;
