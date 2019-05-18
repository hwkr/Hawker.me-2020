import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

// eslint-disable-next-line no-unused-vars
import styles from '../styles/main.less';

import Icon from '../components/common/Icon';
import SocialLinks from '../components/common/SocialLinks';

export default class IndexPage extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  }

  openChat = () => {
    const { data } = this.props;
    window.open(data.site.siteMetadata.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    const { data } = this.props;
    const { social_links: socialLinks } = data.site.siteMetadata;
    return (
      <div className="home">
        <Helmet title={data.site.siteMetadata.title} />
        <button
          className="btn btn-primary btn-action btn-lg tooltip tooltip-left circle"
          data-tooltip="Talk to me right meow"
          onClick={this.openChat}
          type="button"
        >
          <Icon name="social-facebook-messenger" size={1.5} />
        </button>
        <header className="splash">
          <div className="hero">
            <div>
              <h1>
                <small>Hello! I&apos;m </small>
                <br />
                <big>
                  Brynn
                  <br />
                  Hawker
                </big>
                <br />
                <small>an artist / designer</small>
              </h1>
              <SocialLinks links={socialLinks} linkClass={['btn', 'btn-link', 'btn-lg', 'tooltip-bottom']} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        chat_url,
        social_links {
          href,
          tooltip,
          icon,
        }
      }
    }
  }
`;