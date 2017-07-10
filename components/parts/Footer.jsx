import React, { Component /* , PropTypes */ } from 'react';
import classNames from 'classnames';

import Config from 'Config';

import Icon from './Icon';
import Brand from './Brand';
import PageLink from '../common/PageLink';

export default class Footer extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    const linkClass = classNames([
      'btn',
      'btn-link',
      'tooltip',
    ]);
    return (
      <footer>
        <PageLink className="btn btn-link btn-sm" to="/"><Brand /></PageLink>
        <p className="made-with hide-xs">Made with <Icon name="heart" /> in Victoria, BC</p>
        <ul className="social">
          {Config.social_links.map((link, i) =>
            <li key={i}>
              <a href={link.href} className={linkClass} data-tooltip={link.tooltip} target="_blank" rel="noopener noreferrer external">
                <Icon name={link.icon} />
              </a>
            </li>
          )}
        </ul>
      </footer>
    );
  }
}
