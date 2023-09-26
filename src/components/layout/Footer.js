import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.modules.css'
//import {footer, social_list} from './Footer.modules.css';
function Footer() {
  return (
    <footer className="social_footer">
        <ul className="social_list">
          <li>
            <a href='#'>
            <FaFacebook/>
            </a>
            
          </li>
          <li>
            <a href='#'>
            <FaInstagram/>
            </a>  
          </li>
          <li>
            <a href='#'>
            <FaLinkedin/>
            </a>
            
          </li>
        </ul>
        <p>&copy; 2023 Computer Engineer Danubio</p>

    </footer>
  );
}

export default Footer;
