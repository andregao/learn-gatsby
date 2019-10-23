import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import basicImage from '../images/connectBcg.jpeg';
import Image from 'gatsby-image';

const getImages = graphql`
  query {
    fixedImage: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluidImage: file(name: { eq: "blogBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <Container>
      <article>
        <h3>Basic Image</h3>
        <img src={basicImage} alt="Basic" className="basic" />
      </article>
      <article>
        <h3>Fixed Image</h3>
        <Image
          fixed={data.fixedImage.childImageSharp.fixed}
          alt={'fixed size image'}
        />
      </article>
      <article>
        <h3>Fluid Image</h3>
        <Image
          fluid={data.fluidImage.childImageSharp.fluid}
          alt={'fluid size image'}
        />
      </article>
    </Container>
  );
};

const Container = styled.div`
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto;
  article {
    border: 3px solid orangered;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 900px) {
    display: grid;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Images;
