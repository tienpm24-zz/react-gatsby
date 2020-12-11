import React, { Fragment } from "react"

import { Layout } from "@src/components/Layout"
import SEO from "@components/SEO"

const IndexPage = () => (
  <Fragment>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </Fragment>
)

export default IndexPage
