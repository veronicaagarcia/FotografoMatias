import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Menu from './Menu';

const NotFound = () => {
  return (
  <div className='NotFcolor'>
    <Menu />
    <NavBar />
    <br /><br /><br />
    <div className='cajaNf'>
      <h4 className='notFound'> PAGE NOT FOUND </h4><br />
      <h4 className='notFound'> Para volver al sitio clik 
        <Link to='/' className='notFound textDeco' >
          AQUI
        </Link>
      </h4>
    </div>
    <br /><br /><br />
    <Footer />
  </div>
  );
};

export default NotFound;