import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import css from '../css/single-blog.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do YYYY")
      text {
        json
      }
    }
  }
`;

const Blog = ({ data: { post } }) => {
  const {
    title,
    published,
    text: { json },
  } = post;
  const options = {
    renderNode: {
      'embedded-asset-block': ({
        data: {
          target: {
            fields: {
              file: {
                'en-US': { url },
              },
            },
          },
        },
      }) => (
        <div className={'rich'}>
          <h3>this is a picture</h3>
          <img width={400} src={url} alt={title} />
        </div>
      ),
    },
  };
  return (
    <Layout>
      <section className={css.blog}>
        <div className={css.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={css.post}>
            {documentToReactComponents(json, options)}
          </article>
          <Link to={'/blog'} className={'btn-primary'}>
            all posts
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
