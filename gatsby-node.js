/* eslint-disable no-unused-vars */

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
