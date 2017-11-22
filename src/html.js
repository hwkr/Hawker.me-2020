import React from 'react';
import Helmet from 'react-helmet';

const BUILD_TIME = new Date().getTime();

const HTML = (props) => {
  const head = Helmet.rewind();

  // include link to the css file if we are running in production mode
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <link rel="stylesheet" href={`/styles.css?t=${BUILD_TIME}`} />;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {css}
        {props.headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
