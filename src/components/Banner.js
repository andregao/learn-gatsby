import React from 'react';
import css from '../css/banner.module.css';

const Banner = ({ title, info, children }) => {
  return (
    <div className={css.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default Banner;
