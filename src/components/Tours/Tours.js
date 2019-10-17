import React from 'react';
import TourList from './TourList';
import { graphql, useStaticQuery } from 'gatsby';

const getAllTours = graphql`
  {
    allTours: allContentfulTour {
      tours: nodes {
        name
        price
        slug
        country
        days
        contentful_id
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
const Tours = () => {
  const {
    allTours: { tours },
  } = useStaticQuery(getAllTours);
  return (
    <section>
      <TourList data={tours}/>
    </section>
  );
};

export default Tours;
