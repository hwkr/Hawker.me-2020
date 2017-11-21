import React, { Component /* , PropTypes */ } from 'react';

import Config from 'Config';

import Brand from './Brand';
import Icon from '../common/Icon';
import SocialLinks from '../common/SocialLinks';
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
    return (
      <footer>
        <PageLink className="btn btn-link btn-sm" to="/"><Brand /></PageLink>
        <p className="made-with hide-xs">Made with <Icon name="heart" /> in Victoria, BC</p>
        <SocialLinks links={Config.social_links} />
      </footer>
    );
  }
}
