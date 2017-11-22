import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Config from 'Config';

import Icon from '../components/common/Icon';
import SocialLinks from '../components/common/SocialLinks';


export default class IndexPage extends Component {

  openChat = () => {
    window.open(Config.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
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
              <SocialLinks links={Config.social_links} linkClass={['btn', 'btn-link', 'btn-lg', 'tooltip-bottom']} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

