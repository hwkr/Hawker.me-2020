import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/parts/Layout';

export default ({ data }) => {
  const { title, description } = data.portfolioYaml;
  return (
    <Layout className="portfolio">
      <Helmet title={title} />
      <div className="container grid-960">
        <div className="columns">
          <div className="column col-8 col-md-12" />
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
    }
  }
`;
