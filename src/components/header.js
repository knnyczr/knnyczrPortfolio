import PropTypes, { node } from "prop-types"
import React, { useRef, createRef, useState, useCallback } from "react"
import { Navbar, Nav } from 'react-bootstrap'

import ThemeContext from '../context/ThemeContext'
import "../components/scss/header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



const Header = ({ siteTitle, logo }) => {
  const [menuCheck, setmenuCheck] = useState(false)

  const changeMenu = () => {
    setmenuCheck(!menuCheck)
  }

  return(
    <ThemeContext.Consumer>
      {
        theme => (
            <header>
              <img src={theme.dark ? logo[1].node.publicURL : logo[0].node.publicURL } alt="kenny cruzer logo svg"/>
              <Navbar variant={theme.dark ? "dark" : "light"} fixed="bottom" expand="xl" >
                <Navbar.Toggle onClick={() => changeMenu()} style={{ backgroundColor: `${theme.dark ? "#fefefe" : "#2a2b2d"}`, color: `${theme.dark ? "#2a2b2d" : "#fefefe"}` }}>
                  {
                    menuCheck == true ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />
                  }
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" style={{ backgroundColor: `${theme.dark ? "#2a2b2d" : "#fefefe"}`}}>
                  <Nav className="ml-auto">
                    <Nav.Link href="/works">works</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href="/contact">contact</Nav.Link>
                    <Nav.Link onClick={theme.toggleDark} href="#">{theme.dark ? <span>{`lightMode()`}</span> : <span>{`darkMode()`}</span>}</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </header>
        )
      }
    </ThemeContext.Consumer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo:  PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
