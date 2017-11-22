import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    body: PropTypes.node,
    image: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    const { title, subtitle, body, image } = this.props;
    return (
      <section className="square">
        <div className="square-image">
          <img src={image} alt={title} />
        </div>
        <div className="square-content">
          <div className="square-header">
            <div className="square-title h4">{title}</div>
            <div className="square-subtitle">{subtitle}</div>
          </div>
          <div className="square-body">{body}</div>
        </div>
      </section>
    );
  }
}
