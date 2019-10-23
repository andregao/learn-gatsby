import React from 'react';
import Layout from '../components/Layout';
import css from '../css/blog.module.css';
import Title from '../components/Title';
import { graphql, Link } from 'gatsby';
import BlogCard from '../components/Blog/BlogCard';

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      posts: nodes {
        slug
        title
        id: contentful_id
        published(formatString: "MMMM DO, YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const Blog = props => {
  const {
    data: {
      posts: { posts },
    },
    pageContext: { pageCount, currentPage },
  } = props;

  let pagination = new Array(pageCount);
  for (let i = 0; i < pagination.length; i++) {
    pagination[i] = i + 1;
  }

  return (
    <Layout>
      <section className={css.blog}>
        <Title title={'latest'} subtitle={'posts'} />
        <div className={css.center}>
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section className={css.links}>
        {currentPage !== 1 && (
          <Link
            to={`/blogs/${currentPage === 2 ? '' : currentPage - 1}`}
            className={css.link}
          >
            prev
          </Link>
        )}

        {pagination.map(pageNumber => (
          <Link
            key={pageNumber}
            to={`/blogs/${pageNumber === 1 ? '' : pageNumber}`}
            className={
              pageNumber === currentPage
                ? css.link.concat(' ', css.active)
                : css.link
            }
          >
            {pageNumber}
          </Link>
        ))}
        {currentPage !== pageCount && (
          <Link to={`/blogs/${currentPage + 1}`} className={css.link}>
            next
          </Link>
        )}
      </section>
    </Layout>
  );
};

export default Blog;
