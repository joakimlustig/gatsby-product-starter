import React from "react";
import Link from "gatsby-link";

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const blogPost = (post) => {
    return (
      <div style={{marginTop: "4%"}} className="row" key={post.id}>
        <Link to={post.frontmatter.path}>
          <div className="card" style={{padding: "2rem"}}>
            <h2 style={{marginTop: 0}}>
              {post.frontmatter.title}
              <br />
              <small className="text-muted" style={{fontSize: "1rem"}}>{post.frontmatter.date} | {post.frontmatter.author}</small>
            </h2>
            <p style={{marginBottom: 0, color: "black"}}>{post.excerpt}</p>
          </div>
        </Link>
    </div>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <h1>Posts</h1>
        {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return blogPost(post);
        })}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
          }
        }
      }
    }
  }
`;