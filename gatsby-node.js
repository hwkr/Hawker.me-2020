/* eslint no-param-reassign: "off", func-names: "off", prefer-arrow-callback: "off" */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function ({ config, stage }) {
  switch (stage) {
    case 'develop': {
      config.removeLoader('less');
      config.loader('less', function (cfg) {
        cfg.test = /\.less$/;
        cfg.loader = 'style!css?sourceMap!less?sourceMap';
        return cfg;
      });
      config.loader('font', function (cfg) {
        cfg.test = /\.font\.?(js|json)$/;
        cfg.loader = 'style!css?sourceMap!less?sourceMap!webfonts';
        return cfg;
      });
      return config;
    }
    default: {
      config.removeLoader('less');
      config.loader('less', function (cfg) {
        cfg.test = /\.less$/;
        cfg.loader = ExtractTextPlugin.extract('css!less?compress');
        return cfg;
      });
      config.loader('font', function (cfg) {
        cfg.test = /\.font\.?(js|json)$/;
        cfg.loader = ExtractTextPlugin.extract('css!less?compress!webfonts');
        return cfg;
      });
      config.plugin('extract-css', ExtractTextPlugin, ['styles.css', { allChunks: true }]);
      return config;
    }
  }
};
