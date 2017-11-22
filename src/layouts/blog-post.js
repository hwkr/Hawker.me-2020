import React, { Component } from 'react';
import PropTypes from 'prop-types';
import graphql from 'graphql';

class BlogPostTemplate extends Component {

  static propTypes = {
    data: PropTypes.any,
  }


  render() {
    const post = this.props.data.markdownRemark;

    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

// export const pageQuery = graphql`
// query BlogPostBySlug($slug: String!) {
//   markdownRemark(fields: { slug: { eq: $slug }}) {
//     html
//     frontmatter {
//       title
//     }
//   }
// }
// `;
