import React from 'react';
import Tour from '../Tours/Tour';
import { useStaticQuery, graphql, Link } from 'gatsby';
import css from '../../css/items.module.css';
import Title from '../Title';

const getTours = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      tours: nodes {
        name
        price
        slug
        country
        days
        contentful_id
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const {
    featuredTours: { tours },
  } = useStaticQuery(getTours);

  return (
    <article className={css.tours}>
      <Title title={'feature'} subtitle={'tours'} />
      <div className={css.center}>
        {tours.map(tour => (
          <Tour key={tour.contentful_id} data={tour} />
        ))}
      </div>
      <Link to={'/tours'} className={'btn-primary'}>all tours</Link>
    </article>
  );
};

export default FeaturedTours;
