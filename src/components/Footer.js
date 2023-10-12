import React from 'react';
import logo from '../components/images/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer className='bg_purple'>
        <div className='uppperFooter py-5'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-xl-3'>
                        <div className='card bg-transparent border-0'>
                            <div className='footer_logo'>
                                <Link to='/'>
                                 <img src={logo} alt=''/>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3'>
                        <div className='card text-white bg-transparent border-0 ps-5'>
                            <h4>Quick Links</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link className='text-decoration-none text-white' to=''>Menu Card</Link>
                                </li>
                                <li>
                                <Link className='text-decoration-none text-white' to=''>About Us</Link>
                                </li>
                                <li>
                                <Link className='text-decoration-none text-white' to=''>Visit</Link>                                    
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3'>
                    <div className='card text-white bg-transparent border-0 ps-5'>
                            <h4>Menu</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    <Link className='text-decoration-none text-white' to=''>Pizza</Link>
                                </li>
                                <li>
                                <Link className='text-decoration-none text-white' to=''>Pancake</Link>
                                </li>
                                <li>
                                <Link className='text-decoration-none text-white' to=''>Noodles</Link>                                    
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3'>
                    <div className='card text-white bg-transparent border-0 ps-5'>
                            <h4>Contact Us</h4>
                            <ul className='list-unstyled'>
                                <li>
                                    Mobile No: <Link className='text-decoration-none text-white' to=''>7584587585</Link>
                                </li>
                                <li>
                                    Email: <Link className='text-decoration-none text-white' to=''>test@gmail.com</Link>
                                </li>
                                <li>
                                    Address: <Link className='text-decoration-none text-white' to=''>xyz, kolkata, 01</Link>                                    
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lowerFooter'>

        </div>
    </footer>
    </>
  )
}

export default Footer