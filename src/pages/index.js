import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

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

export default ({
  data: {
    homeHero: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <Layout>
    <StyledHero home img={fluid}>
      <Banner
        title={'continue exploring'}
        info={
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur autem consectetur dolore eaque facilis'
        }
      >
        <Link to={'/tours'} className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);
