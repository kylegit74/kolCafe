import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CgFacebook, CgGoogle, CgInstagram, CgMail, CgPhone } from 'react-icons/cg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../components/images/logo1.png';
import navAngle from '../components/images/nav_golden_angle.png';

class NavTop extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 600 && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (window.scrollY < 600 && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  };

  render() {
    return (
      <div className={this.state.scrolled ? 'bg-black position-fixed z-3 w-100 fixed-nav' : 'bg-black position-relative z-3 w-100 fixed-nav'}>
        <div className='btn_bg_golden nav_top_golden position-absolute z-3 fixed-nav pe-5 py-1 top-0 end-0'>
              <div className='container'>
                <div className='d-flex justify-content-end gap-3 '>
                  <div className='text-white d-flex gap-2 align-items-center'>
                    <CgPhone className='fs-4'/>
                    <a className='text-white text-decoration-none fw-bold' href=''>+44 2545845875</a>
                  </div>
                  <div className='text-white d-flex gap-2 align-items-center'>
                    <CgMail className='fs-4'/>
                    <a className='text-white text-decoration-none fw-bold' href=''>test@test.com</a>
                  </div>
                </div>
              
              </div>
        </div>
        <Navbar expand="lg" className="bg-transparent">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
              <Navbar.Brand><Link to='/'><img src={logo} className='nav_band_logo' alt="Logo" /></Link></Navbar.Brand>
              <Nav className="align-items-center gap-4 mt-4">
                <Nav.Link className='text-white' as={Link} to='/'>Home</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/about'>About</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/menu'>Menu</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/gallery'>Gallery</Nav.Link>
                <Nav.Link className='text-white' as={Link} to='/contact'>Contact Us</Nav.Link>
              </Nav>
              <Nav className="align-items-center gap-4 mt-4">
                <Nav.Link className='color_golden' href="#"><CgFacebook/></Nav.Link>
                <Nav.Link className='color_golden' href="#"><CgGoogle/></Nav.Link>
                <Nav.Link className='color_golden' href="#"><CgInstagram/> </Nav.Link>
                <Nav.Link className='text-white' href="#"><button className='border-0 rounded-2 btn_bg_golden px-3 py-2 text-white fw-bold'>Book Table</button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavTop;
