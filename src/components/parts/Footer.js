import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Brand from './Brand';
import Icon from '../common/Icon';
import SocialLinks from '../common/SocialLinks';

export default class Footer extends Component {
  static propTypes = {
    socialLinks: PropTypes.array.isRequired,
  }

  render() {
    const { socialLinks } = this.props;
    return (
      <footer>
        <Link className="btn btn-link btn-sm" to="/"><Brand /></Link>
        <p className="made-with hide-xs">Made with <Icon name="heart" /> in Victoria, BC</p>
        <SocialLinks links={socialLinks} />
      </footer>
    );
  }
}
