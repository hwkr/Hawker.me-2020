import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <i className={`icon hi hi-${this.props.name}`} style={{ fontSize: `${this.props.size}em` }} />
    );
  }
}
