import React from 'react';
import { Link} from 'react-router-dom';
import { CgFacebook, CgGoogle, CgPhone } from 'react-icons/cg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../components/images/logo.jpg';


const NavTop = () => (
  <div className='position-absolute top-0v w-100 z-1'>
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand><Link to='/'><img src={logo} className='nav_band_logo' alt="Logo" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-4">
            <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/about'>About</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/menu'>Menu</Nav.Link>  
            <Nav.Link className='text-white' as={Link} to='/gallery'>Gallery</Nav.Link>
            <Nav.Link className='text-white' as={Link} to='/contact'>Contact Us</Nav.Link>
            <span className='text-danger fs-2'>|</span>
            <span className='text-danger fs-4'>|</span>
            <Nav.Link className='text-white' href="#"><CgFacebook/></Nav.Link>
            <Nav.Link className='text-white' href="#"><CgGoogle/></Nav.Link>
            <Nav.Link className='text-white' href="#"><CgPhone/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </div>
)

export default NavTop;
