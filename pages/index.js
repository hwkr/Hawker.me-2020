import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

import Icon from '../components/parts/Icon';


export default class IndexPage extends Component {

  openChat = () => {
    window.open(config.chat_url, 'newwindow', 'width=500, height=600'); return false;
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
                <small>
                  Hello! I&apos;m
                </small>
                <br />
                <big>
                  Brynn
                </big>
                <br />
                <small>
                  an artist and designer
                </small>
              </h1>
              <br />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

