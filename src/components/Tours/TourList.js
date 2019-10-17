import React, { useEffect, useState } from 'react';
import css from '../../css/items.module.css';
import Tour from './Tour';
import Title from '../Title';

const TourList = ({ data }) => {
  const [sorted, setSorted] = useState([]);
  useEffect(() => {
    setSorted([...data].sort((a, b) => a.price - b.price));
  }, [data]);

  return (
    <article className={css.tours}>
      <Title title="our" subtitle="tours" />
      <div className={css.center}>
        {sorted.map(tour => (
          <Tour key={tour.contentful_id} data={tour} />
        ))}
      </div>
    </article>
  );
};

export default TourList;
