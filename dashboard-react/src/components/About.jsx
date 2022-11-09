import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Menu from './Menu';
function About() {
  return (
    <>
      <div className="homeBox">
          <Menu />
          <NavBar />
          <main ><br /><br /><br />
          <h1>About Me</h1>
          <br /><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sed voluptatem omnis fuga libero deleniti modi ipsa cupiditate soluta recusandae? Corporis recusandae unde illum suscipit fuga dolore natus minima quos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum minus ex delectus molestiae libero facere, quae quo eos, cupiditate provident cum asperiores, repudiandae reprehenderit placeat eum iusto rem iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ab quod repellat, temporibus tempore, obcaecati aspernatur harum reprehenderit natus, magnam dolorem voluptates nihil? Officiis tempora repellat repellendus minus, accusamus id?</p>
          <p> Fotografías de pequeñas cosas que me cruzo en la vida.</p>
          <p> Vengo de <a className="linkAm" href="https://www.instagram.com/matiasflyfishing/"> @matiasflyfishing </a></p>
          <p> Socio <a className="linkAm" href="https://www.instagram.com/apdl.argentina/"> @apdl.argentina </a> / <a className="linkAm" href="https://www.instagram.com/appmlaplata/"> @appmlaplata </a> / <a className="linkAm" href="https://www.instagram.com/avesargentinas/"> @avesargentinas </a></p><br /><br /><br />
          </main>        
          <Footer />
      </div>
    </>
  );
};
    
export default About;