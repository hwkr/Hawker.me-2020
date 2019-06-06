import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import Helmet from 'react-helmet';

import Layout from '../components/parts/Layout';
import ProjectTags from '../components/common/ProjectTags';

export default class PortfolioProjectPage extends Component {
  state = {
    galleryMaximized: false,
  }

  toggleGalleryMaximized = () => {
    const { galleryMaximized: m } = this.state;
    this.setState({ galleryMaximized: !m });
  }

  render() {
    const { data } = this.props;
    const {
      title,
      description,
      tags,
      childrenPortfolioGalleryYaml,
    } = data.portfolioYaml;

    const { galleryMaximized } = this.state;

    return (
      <Layout className={classNames('portfolio-project', { 'gallery-maximized': galleryMaximized })}>
        <Helmet title={title} />
        <div className="container grid-960">
          <div className="columns">
            <div className="column project-gallery">
              { childrenPortfolioGalleryYaml.map((image, i) => {
                const { alt, childFileYaml } = image;
                return (
                  <a className="card project-gallery-item" href={`#${childFileYaml.name}`} onClick={this.toggleGalleryMaximized} role="button" tabIndex={0} onKeyPress={this.handleKeyPress} key={i} id={childFileYaml.name}>
                    <div className="card-image">
                      <Img className="img-responsive" fluid={childFileYaml.childImageSharp.fluid} alt={alt} />
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="column project-info">
              <div className="card">
                <div className="card-header">
                  <div className="card-title h2">{title}</div>
                  <div className="card-subtitle text-gray">
                    <ProjectTags tags={tags} />
                  </div>
                </div>
                { /* eslint-disable-next-line react/no-danger */ }
                <div className="card-body" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    portfolioYaml(fields: { slug: { eq: $slug } }) {
      title
      description
      date
      tags
      childrenPortfolioGalleryYaml {
        alt
        caption
        childFileYaml {
          name
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
