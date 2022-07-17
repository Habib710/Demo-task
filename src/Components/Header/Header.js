import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='nav-css' collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand className='fw-bold fs-3'> <span className='d-css'>d</span>EMO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto nav-link">
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/team'>Team</Link>
              <Link to='/features'>Features</Link>
              <Link to='/contacts'>Contacts</Link>
              
            </Nav>
            <Nav>
              <Link to='/contacts'><button className='btn-css'>Contact Now</button></Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;