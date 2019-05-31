/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';


import styles from '../../styles/main.less';
// eslint-disable-next-line import/extensions
import fonts from '../../font/hawkicon.font.js';

import Footer from './Footer';

export default class Layout extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
  }

  static defaultProps = {
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
                }
              }
            }
          }
        `}
        render={(data) => {
          const { title, console_cats, social_links } = data.site.siteMetadata;
          // eslint-disable-next-line no-console
          console.log(...console_cats);
          return (
            <div className={className}>
              <Helmet titleTemplate={`%s → ${title}`} defaultTitle={title} />
              { children }
              <Footer socialLinks={social_links} />
            </div>
          );
        }}
      />
    );
  }
}
