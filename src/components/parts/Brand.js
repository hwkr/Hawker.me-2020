import React from 'react';
import SVGInline from 'react-svg-inline';

// eslint-disable-next-line import/no-webpack-loader-syntax
import brandSVG from '!!raw-loader!../../img/brand.svg';

const Brand = () => (
  <div className="brand">
    <SVGInline svg={brandSVG} />
  </div>
);

export default Brand;
