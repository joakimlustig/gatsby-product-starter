import React from "react";
import Helmet from 'react-helmet';

import { config } from '../../site-config'

export default function Template({
  data,
}) {
  const { markdownRemark: post } = data;
  return (
    <div className="container">
      <Helmet>
        <meta name="description" content={post.excerpt.trim()} />
        <title>{config.siteName + ' blog | ' + post.frontmatter.title + " | " + config.siteName + " blog"}</title>
        <link rel="canonical" href={config.siteUrl + post.frontmatter.path} />
      </Helmet>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h1 style={{textAlign: "center", maginBottom: 0}}>
            {post.frontmatter.title}
            <br />
            <small className="text-muted" style={{fontSize: "16px"}}>{post.frontmatter.date} | {post.frontmatter.author}</small>
          </h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      excerpt(pruneLength: 320)
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`
;