import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import colors from "./Colors"

import styled from "@emotion/styled"
// import { css } from "@emotion/core"

const Container = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  marginbottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0, textAlign: `center` }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
