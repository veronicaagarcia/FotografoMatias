import React from 'react';


import image1 from '../assets/images/foto1.png';
const ContentRowTop = () => {
  return (
    <div className="row">
      <h1 className='tituloContent'>Estudio fotográfico</h1>
      <img width='100%' className="img1" src={image1} alt="img1" />     
      <br />
    </div>
  );
};

export default ContentRowTop;