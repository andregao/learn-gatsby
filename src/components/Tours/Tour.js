import React from 'react';
import css from '../../css/tour.module.css';
import { FaMap } from 'react-icons/fa';
import { graphql, Link, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';

const getDefaultImage = graphql`
  query {
    defaultBcg: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`;

const Tour = ({ data }) => {
  const {
    defaultBcg: {
      childImageSharp: { fluid: defaultBcgFluid },
    },
  } = useStaticQuery(getDefaultImage);

  const { name, price, country, slug, days, images } = data;
  return (
    <article className={css.tour}>
      <div className={css.imgContainer}>
        <GatsbyImage
          fluid={images[3] ? images[3].fluid : defaultBcgFluid}
          className={css.img}
        />
        <Link to={`/tours/${slug}`} className={css.link}>
          details
        </Link>
      </div>
      <div className={css.footer}>
        <h3>{name}</h3>
        <div className={css.info}>
          <h4 className={css.country}>
            <FaMap className={css.icon} />
            {country}
          </h4>
          <div className={css.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
};

export default Tour;
