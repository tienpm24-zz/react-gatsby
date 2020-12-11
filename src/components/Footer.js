import { styled } from "@adapters/styled-components"

import React from "react"

import { useSiteMetadata } from "@graphql/queries/site-metadata"

const Wrapper = styled.footer`
  margin-top: 3rem;
`

const Link = styled.a`
  color: #333;
  font-weight: bold;
  text-decoration: none;
`

const Footer = () => {
  const { author } = useSiteMetadata()
  return (
    <Wrapper>
      Created by{" "}
      <Link href="https://www.facebook.com/minhtien2424">{author}</Link> ©
      {new Date().getFullYear()}
    </Wrapper>
  )
}

export default Footer
