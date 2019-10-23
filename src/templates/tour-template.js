import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import css from '../css/template.module.css';
import { FaMoneyBillWave, FaMap } from 'react-icons/all';
import GatsbyImage from 'gatsby-image';
import Day from '../components/Tour/Day';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      itinerary {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    itinerary,
    start,
  } = data.tour;
  const [mainImage, ...defaultImages] = images;

  return (
    <Layout>
      <SEO title={name}/>
      <StyledHero img={mainImage.fluid} />
      <section className={css.template}>
        <div className={css.center}>
          <div className={css.images}>
            {defaultImages.map((image, index) => (
              <GatsbyImage
                key={index}
                fluid={image.fluid}
                className={css.image}
                alt={'a tour'}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={css.info}>
            <p>
              <FaMoneyBillWave className={css.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={css.icon} />
              {country}
            </p>
          </div>
          <h4>starts on: {start}</h4>
          <h4>duraing: {days}</h4>
          <p className={css.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={css.journey}>
            {itinerary.map(day => (
              <Day key={day.day} data={day} />
            ))}
          </div>
          <Link to={'/tours'} className='btn-primary'>back to tours</Link>
        </div>
      </section>
    </Layout>
  );
};

export default TourTemplate;
