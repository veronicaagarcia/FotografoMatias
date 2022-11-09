import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/LogoNegro.jpeg';

function NavBar() {
    return (
        <div className='menuNb'>
          <img width='100%' className="logo" src={logo} alt="logo" />
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="me-auto">
              <Link to={'/About'} className="nav-link centrar"> About Me </Link>
              <Link to={'/Galery'} className="nav-link centrar"> Galery </Link>
              <Link to={'/Contact'} className="nav-link centrar"> Contact </Link>
              <Link to={"/"} className="nav-link negrita colorR centrar"> Home </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  };
      
  export default NavBar;