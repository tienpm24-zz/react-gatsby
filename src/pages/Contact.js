import React from "react"

import { Layout } from "@src/components/Layout"

import SEO from "@components/SEO"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact page</h1>
      <ul>
        Contact me via:
        <li>
          email:
          <strong>phaminhtien2424@gmail.com</strong>
        </li>
        <li>
          Facebook:
          <strong>
            <a href="https://www.facebook.com/minhtien2424">@minhtien2424</a>
          </strong>
        </li>
      </ul>
    </Layout>
  )
}

export default Contact
