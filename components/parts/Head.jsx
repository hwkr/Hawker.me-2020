import React, { Component /* , PropTypes */ } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

export default class Head extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Helmet
        titleTemplate={`%s – ${config.siteTitle}`}
        defaultTitle={config.siteTitle}
        meta={[
          { name: 'description', content: config.description },
        ]}
      />
    );
  }
}
