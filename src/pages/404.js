import React from 'react';
import Layout from '../components/Layout';
import css from '../css/error.module.css';
import { Link } from 'gatsby';
import Banner from '../components/Banner';

const NotFound = () => {
  return (
    <Layout>
      <header className={css.error}>
        <Banner title={"oops it's a dead end"}>
          <Link to={'/'} className="btn-white">
            back to home
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default NotFound;
