/* eslint react/prop-types: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// eslint-disable-next-line import/no-webpack-loader-syntax
import favicon from '!!file-loader!./img/favicon.png';

const BUILD_TIME = new Date().getTime();

export default function HTML(props) {
  const head = Helmet.rewind();

  const {
    headComponents,
    bodyAttributes,
    preBodyComponents,
    body,
    postBodyComponents,
  } = props;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="shortcut icon" href={`${favicon}?t=${BUILD_TIME}`} />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};
