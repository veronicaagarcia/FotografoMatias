import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';
import NavBar from './NavBar'

function Home() {
  return (
    <>
      <div className='homeBox'>
        <div>
          <Menu />
          <NavBar />
          <br /><br />
          <Content />   
          <br /><br /><br /> 
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
