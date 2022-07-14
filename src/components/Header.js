import { Link } from 'react-router-dom';
import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Book my Ticket</Navbar.Brand>
          <Nav className=" nav-custom">
            <Link className='linkTab' to='/'>Main</Link>
            <Nav.Link >Contact us</Nav.Link>
            <Nav.Link >About us</Nav.Link>
          </Nav>
          <div className='button-group'>
          <Button variant="outline-danger">Sign Up</Button>
          <Button variant="danger">Sign In</Button>
          </div>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header