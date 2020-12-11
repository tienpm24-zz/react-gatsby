import React from "react"
import { Link } from "@adapters/gatsby"

import { Layout } from "@components/Layout"

export const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
