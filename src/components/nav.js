import React from 'react';
import "../components/scss/nav.scss"
import { Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar expand="lg">
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
  )
}

export default Navigation; 
