import React from 'react'
import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './Nav1.css'
import {Link} from 'react-router-dom'

const Nav1 = () => {

  const [naver, setNaver] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 30) {
      setNaver(true)
    }
    else {
      setNaver(false)
    }
  }

  window.addEventListener('scroll', changeNav)
  return (
    <Navbar className= {naver? 'nav1b': 'nav1'} bg= {naver? 'white': 'transparent'} expand="lg">
    <Container fluid>
      <Navbar.Brand className= {naver? 'text-primary': 'text-info'} href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
         
        </Nav>
        <Link to = '/' style={{  textDecoration: 'none' }} className={naver? 'text-primary nav1links': 'text-white nav1links'} href="#action1">Home</Link>
        <Link to= '/about' style={{  textDecoration: 'none' }} className={naver? 'text-primary nav1links': 'text-white nav1links'} href="#action1">About</Link>
        <Link to= '/products' style={{  textDecoration: 'none' }} className={naver? 'text-primary nav1links': 'text-white nav1links'} href="#action1">Products</Link>
        
          
          {/*<NavDropdown title={
              <span className={naver? 'text-primary nav1links my-auto': 'text-white nav1links my-auto'}>Products</span>
              } id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Chemicals, Jerrycans, Raw Materials</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Oil Seeds</NavDropdown.Item>
            </NavDropdown> */}
          
         {/* <Nav.Link className={naver? 'text-primary nav1links': 'text-white nav1links'} href="#action1">Brands</Nav.Link> */}

         <Link to= '/contact' style={{  textDecoration: 'none' }} className= 'bg-info text-light nav1links nav1contbutt' href="#action1">Contact Us!</Link>
          
         {/* <Button className='bg-info nav1butt'>
              <p>Email Today!</p>
          </Button> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Nav1