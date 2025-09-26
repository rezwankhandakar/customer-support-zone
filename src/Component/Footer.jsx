import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='h-auto w-full bg-black text-white'>
  <div className='flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-10 py-9 gap-8'>
    
    <div className='w-full md:w-1/4'>
      <h2 className='text-xl font-semibold pb-2'>CS — Ticket System</h2>
      <p className='text-[12px] text-gray-400'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    <div className='flex flex-col sm:flex-row justify-between w-full md:w-2/4 gap-6'>
      <div>
        <h3>Company</h3>
        <div className='text-[12px] text-gray-400 pt-3 space-y-1'>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Sales</p>
        </div>
      </div>

      <div>
        <h3>Services</h3>
        <div className='text-[12px] text-gray-400 pt-3 space-y-1'>
          <p>Products & Services</p>
          <p>Customer Stories</p>
          <p>Download Apps</p>
        </div>
      </div>

      <div>
        <h3>Information</h3>
        <div className='text-[12px] text-gray-400 pt-3 space-y-1'>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>
        </div>
      </div>
    </div>

    <div className='w-full md:w-auto'>
      <h3>Social Links</h3>
      <div className='text-[12px] text-gray-400 pt-3 space-y-1'>
        <p><FontAwesomeIcon icon={faSquareXTwitter} className="mr-2" />@CS — Ticket System</p>
        <p><FontAwesomeIcon icon={faLinkedin} className="mr-2" />@CS — Ticket System</p>
        <p><FontAwesomeIcon icon={faFacebook} className="mr-2" />@CS — Ticket System</p>
        <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" />support@cst.com</p>
      </div>
    </div>
  </div>

  <div>
    <h4 className='text-center text-[12px] text-white pt-5 pb-4'>
      © 2025 CS — Ticket System. All rights reserved.
    </h4>
  </div>
</div>

    );
};

export default Footer;