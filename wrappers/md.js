import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default class extends Component {

  static propTypes = {
    route: PropTypes.object,
    router: PropTypes.object,
  }

  render() {
    const page = this.props.route.page.data;
    const description = page.description || '';
    const keywords = page.keywords || '';
    const meta = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
    ];
    return (
      <div className="markdown">
        <Helmet
          title={page.title}
          meta={meta}
        />
        <div className="container grid-480">
          <div dangerouslySetInnerHTML={{ __html: page.body }} />
        </div>
      </div>
    );
  }
}
