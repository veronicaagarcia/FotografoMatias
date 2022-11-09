import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Menu from './Menu';
function Contact() {
  return (
    <>
      <div className="homeBox">
          <Menu />
          <NavBar />
          <main ><br /><br /><br />
          <h1>Contact Me</h1>
          <br /><br />
          <p><i className='fab fa-whatsapp'></i><a className='link' href='https://wa.me/+5492215673713'> WhatsApp </a></p>
          <p><i className='fab fa-instagram'></i><a className='link' href='https://www.instagram.com/matiasmdlc.ph/'> matiasmdlc.ph </a></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed voluptatem omnis fuga libero deleniti modi ipsa cupiditate soluta recusandae? Corporis recusandae unde illum suscipit fuga dolore natus minima quos.</p>
          <p> Vengo de <a className="linkAm" href="https://www.instagram.com/matiasflyfishing/"> @matiasflyfishing </a></p>
          <p> Socio <a className="linkAm" href="https://www.instagram.com/apdl.argentina/"> @apdl.argentina </a> / <a className="linkAm" href="https://www.instagram.com/appmlaplata/"> @appmlaplata </a> / <a className="linkAm" href="https://www.instagram.com/avesargentinas/"> @avesargentinas </a></p><br /><br /><br />
          </main>        
          <Footer />
      </div>
    </>
  );
};
    
export default Contact;