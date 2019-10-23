import React from 'react';
import Title from '../Title';
import css from '../../css/about.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const getAboutImage = graphql`
  query {
    aboutImage: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = () => {
  const {
    aboutImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getAboutImage);
  return (
    <section className={css.about}>
      <Title title={'about'} subtitle={'us'} />
      <div className={css.aboutCenter}>
        <article className={css.aboutImg}>
          <div className={css.imgContainer}>
            <GatsbyImage fluid={fluid} alt="about company" />
          </div>
        </article>
        <article className={css.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aperiam architecto blanditiis doloremque ducimus eius
            incidunt, magnam minima natus nemo nulla odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur dolore doloribus dolorum exercitationem explicabo hic
            magnam nostrum rem.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
