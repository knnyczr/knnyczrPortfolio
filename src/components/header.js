import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import ThemeContext from '../context/ThemeContext'
import { useMediaQuery } from 'react-responsive'

import "../components/scss/header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



const Header = ({ logo }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


  const [menuCheck, setmenuCheck] = useState(false)

  const changeMenu = () => {
    setmenuCheck(!menuCheck)
  }

  return(
    <ThemeContext.Consumer>
      {
        theme => (
            <header>
              <Link className="logo" href="/">
                <img src={theme.dark ? logo[1].node.publicURL : logo[0].node.publicURL } alt="kenny cruzer logo svg"/>
              </Link>
              <Navbar 
                variant={theme.dark ? "dark" : "light"} 
                fixed={isMobile ? 'bottom' : 'top'}
                expand="md" 
              >
                <Navbar.Toggle 
                onClick={() => changeMenu()} 
                style={{ 
                  backgroundColor: `${theme.dark ? "#fefefe" : "#2a2b2d"}`, 
                  color: `${theme.dark ? "#2a2b2d" : "#fefefe"}` 
                }}
                >
                  {
                    menuCheck === true ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />
                  }
                </Navbar.Toggle>
                <Navbar.Collapse 
                  id="basic-navbar-nav" 
                  style={{
                    backgroundColor: `
                    ${
                      !isMobile ?
                        `rgba(0,0,0,0)`
                      :
                      !theme.dark ? "#fefefe" : "#2a2b2d"
                    }
                    `,
                    color: `${theme.dark ? "#2a2b2d" : "#fefefe"}` 
                    }}
                  >
                  <Nav className="ml-auto">
                    <Nav.Link href="/works">works</Nav.Link>
                    <Nav.Link href="/about">about</Nav.Link>
                    <Nav.Link href="/contact">contact</Nav.Link>
                    <Nav.Link onClick={theme.toggleDark} href="#">
                      {theme.dark ? <span>{`lightMode()`}</span> : <span>{`darkMode()`}</span>}
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </header>
        )
      }
    </ThemeContext.Consumer>
  )
}

export default Header