import React, { Component } from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';
import Helmet from 'react-helmet';

import Footer from '../components/parts/Footer';

import '../styles/main.less';
import '../font/hawkicon.font';

export default class extends Component {

  static propTypes = {
    data: PropTypes.any,
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
    console.log(...(this.props.data.site.siteMetadata.console_cats)); // eslint-disable-line no-console
    this.state = {
    };
  }

  render() {
    const { children } = this.props;
    const { title, description, social_links: socialLinks } = this.props.data.site.siteMetadata;
    return (
      <div>
        <Helmet
          titleTemplate={`%s – ${title}`}
          defaultTitle={title}
          meta={[
            { name: 'description', content: description },
          ]}
        />
        {children()}
        <Footer socialLinks={socialLinks} />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title,
        description,
        console_cats,
        social_links {
          href,
          tooltip,
          icon,
        }
      }
    }
  }
`;

