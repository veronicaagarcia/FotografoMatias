import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import NavBar from './NavBar'

function Perfil() {
  return (
    <>
      <div className='homeBox'>
        <div>
          <Menu />
          <NavBar />
          <br /><br />
  <h2>Perfil Admin</h2>
  
  <section class="cajas-select">
    <section class="carrouselPD">
      <div id="carousel<%= index %>" class="carousel slide" data-ride="carousel<%= index %>">
        <div class="carousel-inner">
         
          
            <div class="carousel-item">
              
            </div>
              
        </div>
        
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        
        
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        
      </div>
    </section> <p></p>
    
  </section>

<br /><br /><br /> 
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Perfil;