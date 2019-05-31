
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
  }

  static defaultProps = {
    size: '',
  }

  render() {
    const { name, size } = this.props;

    return (
      <i className={`icon hi hi-${name}`} style={{ fontSize: `${size}em` }} />
    );
  }
}
