import React from 'react';
import { graphql } from 'gatsby'
// import Layout from '../components/layout';

export default ({ data }) => {
  const { title, description } = data.portfolioYaml;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
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
