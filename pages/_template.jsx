import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { config } from 'config';

import Head from '../components/parts/Head';
import Footer from '../components/parts/Footer';

import '../styles/main.less';
import '../font/hawkicon.font';

export default class extends Component {

  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
    console.log(...config.console_cats); // eslint-disable-line no-console
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Head />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
