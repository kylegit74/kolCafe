import React from 'react';
import logo from '../components/images/logo_bg_none.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
        <div className='uppperFooter py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-2'>
                        <div className='card bg-transparent border-0'>
                            <div className='footer_logo'>
                                <Link to='/'>
                                 <img src={logo} alt=''/>
                                </Link> 
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-xl-2'>
                        <div className='card text-white bg-transparent border-0 ps-5 gap-3'>
                            <h4 className='border-bottom'>Quick Links</h4>
                            <ul className='list-unstyled ft_li'>
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
                    </div> */}
                    
                    <div className='col-xl-4'>
                    <div className='card text-white bg-transparent border-0 ps-5 gap-3'>
                            <h4 className='color_border'>Contact Us</h4>
                            <ul className='list-unstyled ft_li'>
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
                    <div className='col-xl-6'>
                    <div className='card text-white bg-transparent border-0 ps-5 gap-3'>
                            <iframe title='Facebook Page' height='350' className='m-auto pt-2 w-100' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdosacafekol%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='lowerFooter container position-relative'>
            <div className='d-flex justify-content-between align-items-center py-3'>
                <div><p className='text-white m-0'>© 2023 Cafe Kolkata. All rights reserved.</p></div>
                <div><p className='text-white m-0'>Designed & developed by Kyle Infotech</p></div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer