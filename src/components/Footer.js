import React from 'react';
import css from '../css/footer.module.css';
import { Link } from 'gatsby';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.links}>
        {links.map(({ path, text }) => (
          <Link to={path} key={text}>
            {text}
          </Link>
        ))}
      </div>
      <div className={css.icons}>
        {socialIcons.map(({ icon, url }, index) => (
          <a
            href={url}
            key={index}
            target={'_blank'}
            rel={'noopener noreferer'}
          >
            {icon}
          </a>
        ))}
      </div>
      <div className={css.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights
        reserved
      </div>
    </footer>
  );
};

export default Footer;
