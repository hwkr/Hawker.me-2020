
import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Icon from './Icon';

export default class ProjectTags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
  }

  render() {
    const { tags } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                tag_spec {
                  id
                  icon
                  label
                }
              }
            }
          }
        `}
        render={(data) => {
          const { tag_spec: tagSpec } = data.site.siteMetadata;
          return (
            <span>
              {tags.map((tag, j) => {
                const ts = tagSpec.find(t => t.id === tag);
                return (
                  <span key={j}>
                    <span className="chip">
                      <figure className="avatar avatar-sm avatar-clear">
                        <Icon name={ts.icon} />
                      </figure>
                      {ts.label}
                    </span>
                    &nbsp;
                  </span>
                );
              })}
            </span>
          );
        }}
      />

    );
  }
}
