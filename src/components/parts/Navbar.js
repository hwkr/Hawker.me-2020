import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Brand from './Brand';
import Icon from '../common/Icon';


export default class Navbar extends Component {
  static propTypes = {
    chatUrl: PropTypes.string.isRequired,
  }

  openChat = () => {
    const { chatUrl } = this.props;
    window.open(chatUrl, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    return (

      <header className="navbar container grid-960">
        <section className="navbar-section">
          <Link className="navbar-brand btn btn-link btn-lg" to="/"><Brand /></Link>
        </section>
        <section className="navbar-section">
          <button
            className="btn btn-lg"
            onClick={this.openChat}
            type="button"
          >
            <Icon name="social-facebook-messenger-bubble" />
            Get in touch
          </button>
        </section>
      </header>
    );
  }
}
