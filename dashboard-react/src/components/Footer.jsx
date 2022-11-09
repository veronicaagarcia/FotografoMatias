import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='box-Footer'>
      <p className='linkP'> ©2022 Matías Monge Ph estudio fotográfico </p>
      <div className='contacto'>
        <p><i className='fab fa-whatsapp'></i><a className='link' href='https://wa.me/+5492215673713'> WhatsApp </a></p>
        <p><i className='fab fa-instagram'></i><a className='link' href='https://www.instagram.com/matiasmdlc.ph/'> matiasmdlc.ph </a></p>
        <p><Link to={'/Admin'} className='AdmItem'><i className='fas fa-lock'></i> </Link></p>
        
      </div>
    </footer>
  );
};

export default Footer;
