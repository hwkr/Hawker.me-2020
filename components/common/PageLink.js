import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

export default class PageLink extends PureComponent {

  static propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
  }

  render() {
    const { to, children, className } = this.props;

    // add a trailing slash if there is not one (to support SPA)
    let linkTo = to;
    if (to.substr(to.length - 1) !== '/') {
      linkTo = `${to}/`;
    }

    return (
      <Link className={className} to={prefixLink(linkTo)}>
        {children}
      </Link>
    );
  }
}

