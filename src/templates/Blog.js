import React from "react"

import { graphql } from "gatsby"
import { renderRichText } from "@adapters/gatsby-source-contentful"
import { BLOCKS } from "@adapters/rich-text-types"

import Layout from "@components/Layout"
import SEO from "@components/SEO"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            __typename
            contentful_id
            title
            fixed(width: 300) {
              src
            }
          }
        }
      }
    }
  }
`

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <img alt={node.data.target.title} src={node.data.target.fixed.src} />
      )
    },
  },
}

const BlogTemplate = ({ data }) => {
  const { title, publishedDate, body } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <h2>{publishedDate}</h2>
      {renderRichText(body, options)}
    </Layout>
  )
}

export default BlogTemplate
