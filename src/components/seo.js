import React from "react"
import { Helmet } from "@adapters/react-helmet"

import { useSiteMetadata } from "@graphql/queries/site-metadata"

const SEO = ({ title }) => {
  const data = useSiteMetadata()
  return <Helmet title={`${title} | ${data.title}`} />
}
export default SEO
