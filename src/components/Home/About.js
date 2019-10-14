import React from 'react';
import Title from '../Title';
import css from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={css.about}>
      <Title title={'about'} subtitle={'us'} />
      <div className={css.aboutCenter}>
        <article className={css.aboutImg}>
          <div className={css.imgContainer}>
            <img src={img} alt="about company" />
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
