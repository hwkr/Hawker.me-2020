import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Helmet from 'react-helmet';

import Layout from '../components/parts/Layout';

export default ({ data }) => {
  const { title, description, childrenPortfolioImagesYaml } = data.portfolioYaml;
  return (
    <Layout className="portfolio">
      <Helmet title={title} />
      <div className="container grid-960">
        <div className="columns">
          <div className="column col-8 col-md-12">
            { childrenPortfolioImagesYaml.map((image, i) => {
              const { alt, childFileYaml, caption } = image;
              return (
                <figure className="figure" key={i}>
                  <Img className="img-responsive" fluid={childFileYaml.childImageSharp.fluid} alt={alt} />
                  <figcaption className="figure-caption text-center">{caption}</figcaption>
                </figure>
              );
            })}
          </div>
          <div className="column col-4 col-md-12">
            <h2>{title}</h2>
            <p>{description}</p>
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
      childrenPortfolioImagesYaml {
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
