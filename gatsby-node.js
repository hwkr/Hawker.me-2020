/* eslint-disable no-unused-vars */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.font\.?(js|json)$/,
            use: [
              loaders.miniCssExtract(),
              loaders.css({ importLoaders: 1 }),
              loaders.postcss(),
              'less-loader',
              'webfonts-loader',
            ],
          },
        ],
      },
    });
  }
};

// Generating Portfolio Pages

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'PortfolioYaml') {
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: 'pages/portfolio' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allPortfolioYaml {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allPortfolioYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/portfolio-project.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    });
  });
};
