import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Menu from './Menu';
function Admin() {
  return (
    <>
      <div className="homeBox">
          <Menu />
          <NavBar />
          <main ><br /><br /><br />
            <p className='pAd'> Ingreso Administrador</p><br /><br /><br />
            <form method="POST" action="/admin">
                <label for="name"><i class="far fa-envelope iAd"></i></label>
                <input className='centrar bloquesAd' type="name" name="name" id="name" required placeholder= "Usuario"/><br />
                <label for="password"><i class="fas fa-key iAd"></i></label>
                <input className='centrar bloquesAd' type="password" name="password" id="password" required placeholder="Contraseña"/><br /><br />
                <button className="botonAd" type="submit" id="ingresa-button"> <i className="fas fa-lock-open"></i> </button>
            </form>
          </main><br /><br /><br />  
          <Footer />
        </div>
    </>
  );
}

export default Admin;