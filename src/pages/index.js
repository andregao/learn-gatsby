import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Hello world!</h1>
    <Link to="/blog">Link to Blog</Link>
    <Link to="/tours">Link to Tours</Link>
  </Layout>
);
