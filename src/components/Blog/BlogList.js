import React from 'react';
import BlogCard from './BlogCard';
import css from '../../css/blog.module.css';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../Title';

const getBlogs = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      posts: nodes {
        published(formatString: "MMM Do, YYYY")
        createdAt
        title
        slug
        id: contentful_id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const {
    posts: { posts },
  } = useStaticQuery(getBlogs);

  return (
    <section className={css.blog}>
      <Title title={'our'} subtitle={'blogs'} />
      <div className={css.center}>
        {posts.map(post => (
          <BlogCard key={post.id} post={post}/>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
