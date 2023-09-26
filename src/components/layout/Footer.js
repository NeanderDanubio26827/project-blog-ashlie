import React from 'react';
import {FaFacebook, FaInstragram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className="bg-pink text-light text-center py-3">
      <div className="container">
        <p>&copy; 2023 Seu Nome</p>
      </div>
    </footer>
  );
}

export default Footer;
