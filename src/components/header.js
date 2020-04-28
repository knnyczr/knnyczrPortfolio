import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'

import ThemeContext from '../context/ThemeContext'
import "../components/scss/header.scss"


const Header = ({ siteTitle, logo }) => (
  <ThemeContext.Consumer>
    {
      theme => (
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
                <img src={theme.dark ? logo[1].node.publicURL : logo[0].node.publicURL } alt="kenny cruzer logo svg"/>
              </Navbar.Brand>
              <Navbar.Toggle  />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/works">works</Nav.Link>
                  {/* <Nav.Link eventkey="music" href="/music">music</Nav.Link> */}
                  <Nav.Link href="/about">about</Nav.Link>
                  <Nav.Link href="/contact">contact</Nav.Link>
                  <Nav.Link onClick={theme.toggleDark} href="#">{theme.dark ? <span>{`lightMode()`}</span> : <span>{`darkMode()`}</span>}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </header>
      )
    }
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo:  PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
