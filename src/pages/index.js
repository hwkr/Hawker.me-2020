/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/parts/Layout';
import Icon from '../components/common/Icon';
import SocialLinks from '../components/common/SocialLinks';
import ProjectTags from '../components/common/ProjectTags';

export default class IndexPage extends Component {
  static propTypes = {
    data: PropTypes.any.isRequired,
  }

  openChat = () => {
    const { data } = this.props;
    window.open(data.site.siteMetadata.chat_url, 'newwindow', 'width=500, height=600'); return false;
  }

  render() {
    const { data } = this.props;
    const { social_links: socialLinks, tag_spec: tagSpec } = data.site.siteMetadata;
    const portfolioProjects = data.allPortfolioYaml.edges.map(e => e.node);

    return (
      <Layout className="home">
        <button
          className="btn btn-primary btn-action btn-lg tooltip tooltip-left circle"
          data-tooltip="Talk to me right meow"
          onClick={this.openChat}
          type="button"
        >
          <Icon name="social-facebook-messenger" size={1.5} />
        </button>
        <header className="splash">
          <div className="container grid-720 hero">
            <div>
              <h1>
                <small>Hello! I&apos;m </small>
                <br />
                <big>
                  Brynn
                  <br />
                  Hawker
                </big>
                <br />
                <small>an artist / designer</small>
              </h1>
              <SocialLinks links={socialLinks} linkClass={['btn', 'btn-link', 'btn-lg', 'tooltip-bottom']} />
            </div>
          </div>
        </header>
        <main>
          <div className="container grid-960">
            <div className="filter">
              <input type="radio" id="tag-0" className="filter-tag" name="filter-radio" hidden defaultChecked />
              { tagSpec.map((t, i) => (
                <input type="radio" id={`tag-${i + 1}`} className="filter-tag" name="filter-radio" key={i} hidden />
              ))}

              <div className="filter-nav">
                <div className="btn-group">
                  <label className="btn" htmlFor="tag-0"> All</label>
                  { tagSpec.map((t, i) => (
                    <label className="btn" htmlFor={`tag-${i + 1}`} key={i}>
                      <Icon name={t.icon} />
                      {t.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-body columns">
                { portfolioProjects.map((project, i) => {
                  const {
                    title,
                    tags,
                    background,
                    childFileYaml,
                  } = project;
                  const { slug } = project.fields;
                  const tagNums = tags.map(tag => tagSpec.findIndex(t => t.id === tag) + 1);
                  return (
                    <div className="filter-item column col-4" data-tag={tagNums.map(n => `tag-${n}`).join(' ')} key={i}>
                      <Link to={slug} className="card card-link" style={{ backgroundImage: `url("${background}")` }}>
                        <div className="card-image">
                          <Img className="img-responsive" fluid={childFileYaml.childImageSharp.fluid} alt={title} />
                        </div>
                        <div className="card-header">
                          {/* <div className="card-title h2">{title}</div> */}
                          <div className="card-subtitle">
                            <ProjectTags tags={tags} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        chat_url,
        social_links {
          href,
          tooltip,
          icon,
        },
        tag_spec {
          id,
          icon,
          label
        }
      }
    }
    allPortfolioYaml (sort: { order: DESC, fields: [date] })  {
      edges {
        node {
          title
          tags
          background
          fields {
            slug
          }
          childFileYaml {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
