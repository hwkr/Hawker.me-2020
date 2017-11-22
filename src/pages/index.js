import React, { Component } from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';

import CampusMapsImg from '../img/campus-maps/campus-maps-icon.svg';

import Icon from '../components/common/Icon';
import SocialLinks from '../components/common/SocialLinks';
import Card from '../components/common/Card';


export default class IndexPage extends Component {

  static propTypes = {
    data: PropTypes.any,
  }

  openChat = () => {
    window.open(this.props.data.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    const { social_links: socialLinks } = this.props.data.site.siteMetadata;
    return (
      <div className="home">
        <button
          className="btn btn-primary btn-action btn-lg tooltip tooltip-left circle"
          data-tooltip="Talk to me right meow"
          onClick={this.openChat}
        >
          <Icon name="social-facebook-messenger" size={1.5} />
        </button>
        <header className="splash">
          <div className="hero">
            <div>
              <h1>
                <small>Hello! I&apos;m </small><br />
                <big>Brynn<br />Hawker</big><br />
                <small>an artist / designer</small>
              </h1>
              <SocialLinks links={socialLinks} linkClass={['btn', 'btn-link', 'btn-lg', 'tooltip-bottom']} />
            </div>
          </div>
        </header>
        <main className="container grid-960 projects">
          <div className="columns">
            <div className="column col-6 col-md-12">
              <Card title="Campus Maps" subtitle="UX Design / Digital Illustration" image={CampusMapsImg} />
            </div>
            <div className="column col-6 col-md-12">
              <Card title="Campus Maps" subtitle="UX Design / Digital Illustration" image={CampusMapsImg} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        social_links {
          href,
          tooltip,
          icon,
        }
      }
    }
  }
`;
