import React from 'react';
import { Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AnzoLogo from "../../assets/ANZOLOGOS.png";

const NavBar = () => {
  return (
    <div>  <Navbar bg="dark" className='navbar-background' variant="dark">
    <Container>
    <Navbar.Brand><Link className='link-white' to='/'>MES Screen</Link></Navbar.Brand>
    <Navbar.Brand><Link className='link-white' to='/poexecscreen'>Execution Screen</Link></Navbar.Brand>
    <Navbar.Brand><Link className='link-white' to='/posummaryscreen'>Summary Screen</Link></Navbar.Brand>
    <Navbar.Brand><Link className='link-white' to='/modificationscreen'>Modification Screen</Link></Navbar.Brand>
    <Navbar.Brand><div className='logo-anzo'><img src={AnzoLogo} width='50px' height='50px' alt={AnzoLogo}/></div></Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default NavBar;