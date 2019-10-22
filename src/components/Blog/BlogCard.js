import React from 'react';
import css from '../../css/blog-card.module.css';
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

const BlogCard = ({ post }) => {
  const { slug, title, image, published } = post;
  return (
    <article className={css.blog}>
      <div className={css.imgContainer}>
        <GatsbyImage fluid={image.fluid} className={css.img} alt={slug} />
        <Link to={`/blog/${slug}`} className={css.link}>
          read more
        </Link>
        <h6 className={css.date}>{published}</h6>
      </div>
      <div className={css.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
