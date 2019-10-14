import React from 'react';
import css from '../../css/services.module.css';
import services from '../../constants/services';
import Title from '../Title';

const Services = () => {
  return (
    <section className={css.services}>
      <Title title={'our'} subtitle={'services'} />
      <div className={css.center}>
        {services.map(({ icon, title, text }) => (
          <article key={title} className={css.service}>
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
