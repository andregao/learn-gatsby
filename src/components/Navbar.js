import React, { useState } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import css from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen(!isOpen);
  return (
    <nav className={css.navbar}>
      <div className={css.navCenter}>
        <div className={css.navHeader}>
          <img src={logo} alt="site logo" />
          <button type="button" className={css.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={css.logoIcon} />
          </button>
        </div>
        <ul
          className={isOpen ? `${css.navLinks} ${css.showNav}` : css.navLinks}
        >
          {links.map(link => (
            <li key={link.text}>
              <AniLink fade to={link.path}>{link.text}</AniLink>
            </li>
          ))}
        </ul>
        <div className={css.navSocialLinks}>
          {socialIcons.map(({ url, icon }, index) => (
            <a key={index} href={url} target='_blank' rel='noopener noreferrer'>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
