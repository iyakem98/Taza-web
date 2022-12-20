import React from 'react'
import { Route } from 'react-router-dom'
import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navv.css'

const Navv = () => {

  

  const [Color, setColor] = useState(["white"])
  const handleColor= e =>{ 
     setColor("green")
      
  }
  

 
  

  return (
    <header className='nnn'>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='text-capitalize'>
        <Container>
        <div className='logo'>
          <img className ='imm' src = "" href='#'/>
          </div>
          <Link className = 'text-dark' to = '/' style={{ textDecoration: 'none'}}>
             <Navbar.Brand className='nav-link active'>Home</Navbar.Brand>
          </Link>

          <Link to = '/about' className='navls' style={{  textDecoration: 'none' }}>
              <nav-item>About</nav-item>
            </Link>

            <Link to = '/products' className='navls' style={{  textDecoration: 'none' }}>
              <nav-item>Prod</nav-item>
            </Link>

            
            <Link to = '/contact' className='naved' style={{  textDecoration: 'none' }}>
            <nav-item>Contact</nav-item>
            </Link>
      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
           
           
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Navv