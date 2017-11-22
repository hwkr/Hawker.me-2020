import React, { Component, PropTypes } from 'react';

export default class Card extends Component {
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
      <div className="card card-clear card-link">
        <div className="columns col-gapless">
          <div className="column col-4">
            <div className="card-image">
              <img src={image} alt={title} className="img-responsive" />
            </div>
          </div>
          <div className="column col-8">
            <div className="card-header">
              <div className="card-title h5">{title}</div>
              <div className="card-subtitle">{subtitle}</div>
            </div>
            <div className="card-body">{body}</div>
          </div>
        </div>
      </div>
    );
  }
}
