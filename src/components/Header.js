import { styled } from "@adapters/styled-components"

import React from "react"

import { Link } from "@adapters/gatsby"

import { useSiteMetadata } from "@graphql/queries/site-metadata"

const Wrapper = styled.header`
  padding: 1rem 0 3rem;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    li {
      a {
        color: #999;
        font-size: 0.9rem;
        margin-right: 1.3rem;
        text-decoration: none;
      }
      a:hover {
        color: #666666;
      }
    }
  }
`

const Title = styled.h1`
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
`

const activeStyle = {
  color: "#333",
}
const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <Wrapper>
      <Title>{title}</Title>
      <nav>
        <ul>
          <li>
            <Link activeStyle={activeStyle} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link activeStyle={activeStyle} to="/About">
              About
            </Link>
          </li>

          <li>
            <Link activeStyle={activeStyle} to="/Contact">
              Contact
            </Link>
          </li>

          <li>
            <Link activeStyle={activeStyle} to="/Blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}
export default Header
