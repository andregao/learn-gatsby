import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Images from '../examples/Images';

const Blog = () => {
  return (
    <Layout>
      Blog Page works
      <Link to={'/'}>Go Home</Link>
      <Images/>
    </Layout>
  );
};

export default Blog;
