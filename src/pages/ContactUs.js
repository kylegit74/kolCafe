import React from 'react';
import MainLayout from '../layout/MainLayout';
import { CgMail, CgPhone, CgTimer } from 'react-icons/cg';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReserveForm from '../components/ReserveForm';

const ContactUs = () => {
  return (
    <MainLayout>
        <div>
        <div className='about_header d-flex justify-content-center align-items-center py-5'>
          <h2 className='fs-2 text-white'>Contact Us</h2>
        </div>
          <div className='container my-5'>
            <div className='row py-5'>
              <div className='col-xl-3'>
                <div className='card text-center border-0 shadow position-relative p-4 pt-5'>
                  <div className='position-absolute con_card_icon text-danger fs-1 shadow'><FaMapMarkerAlt/></div>
                  <div>
                    <h5>
                      Location
                    </h5>
                    <p>
                      xyz, kolkata-700002
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3'>
                <div className='card text-center border-0 shadow position-relative p-4 pt-5'>
                  <div className='position-absolute con_card_icon text-danger fs-1 shadow'><CgPhone/></div>
                  <div>
                    <h5>
                      Phone Number
                    </h5>
                    <p>
                      915487584582
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3'>
                <div className='card text-center border-0 shadow position-relative p-4 pt-5'>
                  <div className='position-absolute con_card_icon text-danger fs-1 shadow'><CgMail/></div>
                  <div>
                    <h5>
                      Email Address
                    </h5>
                    <p>
                      xyz@test.com
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3'>
                <div className='card text-center border-0 shadow position-relative p-4 pt-5'>
                  <div className='position-absolute con_card_icon text-danger fs-1 shadow'><CgTimer/></div>
                  <div>
                    <h5>
                      Open & Closing
                    </h5>
                    <p>
                      Mon-Sat: 9AM to 10PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ReserveForm/>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14734.583289528793!2d88.3982163!3d22.5923463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02760795555555%3A0xb96eb26472f9bdd5!2sKyle%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1695305214003!5m2!1sen!2sin"
            className="w-100"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>

        </div>
      </MainLayout>
  )
}

export default ContactUs