import React from 'react';
import Layout from '../components/Layout';
import css from '../css/error.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Banner from '../components/Banner';
import SEO from '../components/SEO';

const notFound = () => {
  return (
    <Layout>
      <SEO title={'404 Not Found'} />
      <header className={css.error}>
        <Banner title={"oops it's a dead end"}>
          <AniLink fade to={'/'} className="btn-white">
            back to home
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default notFound;
