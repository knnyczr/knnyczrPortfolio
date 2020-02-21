import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from './nav'
import "../components/scss/header.scss"


const Header = ({ siteTitle, logo }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="kenny cruzer logo svg"/>
        </Link>
        <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo:  PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
