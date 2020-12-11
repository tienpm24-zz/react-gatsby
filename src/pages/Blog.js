import { styled } from "@adapters/styled-components"

import React from "react"

import { Link } from "@adapters/gatsby"

import { useContentfulBlogPost } from "@graphql/queries/markdown"

import Layout from "@components/Layout"
import SEO from "@components/SEO"

const BlogLink = styled(Link)`
  text-decoration: none;
  color: #333;
`

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`

const Post = styled.li`
  margin: 1rem 0;
  a {
    display: block;
    padding: 1rem;
    background: #f4f4f4;
    color: #000;
    text-decoration: none;
  }
  a:hover {
    background: #e4e4e4;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    color: #777;
    font-size: 0.8rem;
    font-style: italic;
  }
`

const Blog = () => {
  const { allContentfulBlogPost } = useContentfulBlogPost()

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <Posts>
        {allContentfulBlogPost.edges.map((edge, index) => (
          <Post key={index}>
            <BlogLink to={`/Blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </BlogLink>
          </Post>
        ))}
      </Posts>
    </Layout>
  )
}

export default Blog
