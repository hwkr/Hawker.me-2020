import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import Helmet from 'react-helmet';

import Layout from '../components/parts/Layout';
import Icon from '../components/common/Icon';
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
    const { data, pageContext } = this.props;
    const {
      title,
      description,
      tags,
      links,
      background,
      childrenPortfolioGalleryYaml,
    } = data.portfolioYaml;

    const { galleryMaximized } = this.state;

    return (
      <Layout className={classNames('portfolio-project', { 'gallery-maximized': galleryMaximized })}>
        <Helmet title={title} />
        <div className="container grid-960 project">
          <div className="columns">
            <div className="column col-md-12 project-info">
              <div className="card">
                <div className="card-header" style={{ backgroundImage: `url("${background}")` }}>
                  <div className="card-title h2">{title}</div>
                  <div className="card-subtitle text-gray">
                    <ProjectTags tags={tags} />
                  </div>
                </div>
                { /* eslint-disable-next-line react/no-danger */ }
                <div className="card-body" dangerouslySetInnerHTML={{ __html: description }} />
                { links ? (
                  <div className="card-footer">
                    { links.map((link, i) => (
                      <a href={link.href} className={classNames('btn', { 'btn-link': i > 0 })} key={i} target={link.href.startsWith('http') ? '_blank' : ''}>
                        { link.icon ? <span><Icon name={link.icon} />&nbsp;</span> : '' }
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : ''}

              </div>
            </div>
            <div className="column col-md-12 project-gallery">
              { childrenPortfolioGalleryYaml.map((image, i) => {
                const { section, alt, childFileYaml } = image;
                if (section) {
                  return (
                    <div className="divider text-center" data-content={section} key={i} />
                  );
                }
                return (
                  <a className="card project-gallery-item" href={`#${childFileYaml.name}`} onClick={this.toggleGalleryMaximized} role="button" tabIndex={0} onKeyPress={this.handleKeyPress} key={i} id={childFileYaml.name}>
                    <div className="card-image">
                      <Img className="img-responsive" fluid={childFileYaml.childImageSharp.fluid} alt={alt} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <ul className="pagination">
            { pageContext.prevEntry ? (
              <li className="page-item page-prev">
                <Link to={pageContext.prevEntry.fields.slug}>
                  <div className="page-item-subtitle">Previous</div>
                  <div className="page-item-title h5">{pageContext.prevEntry.title}</div>
                </Link>
              </li>
            ) : ''
            }
            { pageContext.nextEntry ? (
              <li className="page-item page-next">
                <Link to={pageContext.nextEntry.fields.slug}>
                  <div className="page-item-subtitle">Next</div>
                  <div className="page-item-title h5">{pageContext.nextEntry.title}</div>
                </Link>
              </li>
            ) : ''
            }
          </ul>
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
      background
      date
      tags
      links {
        href
        icon
        label
      }
      childrenPortfolioGalleryYaml {
        alt
        caption
        section
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
