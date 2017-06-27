import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

import Icon from '../components/parts/Icon';

export default class IndexPage extends Component {

  render() {
    return (
      <div className="home">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: config.description },
          ]}
        />
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
            <button className="btn btn-primary btn-lg" onClick={this.openChat}>
              <Icon name="social-facebook-messenger-bubble" size={1.3} /> Talk to me right meow
            </button>
          </div>
        </main>
      </div>
    );
  }
}

