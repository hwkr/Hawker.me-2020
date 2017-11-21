import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Icon from './Icon';

export default class SocialLinks extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      icon: PropTypes.string.isRequired,
    })).isRequired,
    linkClass: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    linkClass: [
      'btn',
      'btn-link',
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { linkClass, links } = this.props;
    return (
      <ul className="social">
        {links.map((link, i) =>
          <li key={i}>
            <a href={link.href} className={classNames(...linkClass, { tooltip: link.tooltip })} data-tooltip={link.tooltip} target="_blank" rel="noopener noreferrer external">
              <Icon name={link.icon} />
            </a>
          </li>
        )}
      </ul>
    );
  }
}
