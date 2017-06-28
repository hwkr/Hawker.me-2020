/* eslint no-param-reassign: "off" */

exports.modifyWebpackConfig = function (config, stage) {
  config.loader('css', function (cfg) {
    cfg.test = /\.font\.?(js|json)$/;
    cfg.loader = 'style!css!less!webfonts';
    return cfg;
  });
  return config;
};
