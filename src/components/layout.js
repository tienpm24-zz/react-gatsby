import { styled } from "@adapters/styled-components"
import { GlobalStyle } from "@base/styles/global-style"

import React, { Fragment } from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          {children}
        </Content>
        <Footer />
      </Container>
    </Fragment>
  )
}
export default Layout
