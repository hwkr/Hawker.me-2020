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
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.description },
          ]}
        />
        <button
          className="btn btn-accent btn-action btn-lg tooltip tooltip-left circle"
          data-tooltip="Talk to me right meow"
          onClick={this.openChat}
        >
          <Icon name="social-facebook-messenger" size={1.5} />
        </button>
        <main className="hero">
          <div>
            <h1>
              Hi! I&apos;m Brynn
              <br />
              <small>
                It's nice to meet you!
              </small>
            </h1>
            <br />
          </div>
        </main>
      </div>
    );
  }
}

