import { useStaticQuery, graphql } from "gatsby"

export const useContentfulBlogPost = () => {
  const contentful = useStaticQuery(graphql`
    query AllContentfulBlogPost {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return contentful
}
