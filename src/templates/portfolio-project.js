import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Helmet from 'react-helmet';

import Layout from '../components/parts/Layout';

export default ({ data }) => {
  const { title, description, childrenPortfolioGalleryYaml } = data.portfolioYaml;
  return (
    <Layout className="portfolio-project">
      <Helmet title={title} />
      <div className="container grid-960">
        <div className="columns">
          <div className="column project-gallery">
            { childrenPortfolioGalleryYaml.map((image, i) => {
              const { alt, childFileYaml, caption } = image;
              return (
                <div className="card project-gallery-item" key={i}>
                  <div className="card-image">
                    <Img className="img-responsive" fluid={childFileYaml.childImageSharp.fluid} alt={alt} />
                  </div>
                  { caption ? <div className="card-body text-center">{caption}</div> : ''}
                </div>
              );
            })}
          </div>
          <div className="column project-info">
            <div className="card">
              <div className="card-header">
                <div className="card-title h2">{title}</div>
                <div className="card-subtitle text-gray">UI UX</div>
              </div>
              { /* eslint-disable-next-line react/no-danger */ }
              <div className="card-body" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    portfolioYaml(fields: { slug: { eq: $slug } }) {
      title
      description
      date
      childrenPortfolioGalleryYaml {
        alt
        caption
        childFileYaml {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
