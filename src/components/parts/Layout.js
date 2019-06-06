/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';


import styles from '../../styles/main.less';
// eslint-disable-next-line import/extensions
import fonts from '../../font/hawkicon.font.js';

import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends Component {
  static propTypes = {
    showNavbar: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
    showNavbar: true,
    className: '',
    children: '',
  }

  render() {
    const { className, children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title,
                console_cats,
                social_links {
                  href,
                  tooltip,
                  icon,
                },
                chat_url
              }
            }
          }
        `}
        render={(data) => {
          const { title, console_cats, social_links, chat_url } = data.site.siteMetadata;
          const { showNavbar } = this.props;
          // eslint-disable-next-line no-console
          console.log(...console_cats);
          return (
            <div className={`layout ${className}`}>
              <Helmet titleTemplate={`%s → ${title}`} defaultTitle={title} />
              { showNavbar ? <Navbar chatUrl={chat_url} /> : '' }
              { children }
              <Footer socialLinks={social_links} />
            </div>
          );
        }}
      />
    );
  }
}
