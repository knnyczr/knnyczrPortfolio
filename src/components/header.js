import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

// import Nav from './nav'
import "../components/scss/header.scss"


const Header = ({ siteTitle, logo }) => (
  <header
    style={{
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
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="kenny cruzer logo svg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/works">works</Nav.Link>
            {/* <Nav.Link href="/music">music</Nav.Link> */}
            <Nav.Link href="/about">about</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
