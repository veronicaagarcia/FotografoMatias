import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Menu from './Menu';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import imgV1 from '../assets/images/imgV1.png';
import imgV2 from '../assets/images/imgV2.png';
function Galery() {
  return (
    <>
      <div className='homeBox'>
          <Menu />
          <NavBar />
          <main ><br /><br /><br />
          <h1>Galery</h1>
          <br /><br />

          <section className='galery'>
            <h3>Fauna salvaje</h3>
            <div className='fotografias'>
                <article>
                    <img width='100%' src={img1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 1</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={img2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 2</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={img1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 1</h4>
                    </div>
                </article>
                <article>
                <img width='100%' src={img2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 2</h4>
                    </div>
                </article>

                <article>
                    <img width='100%' src={img1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 1</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={img2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 2</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={img1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 1</h4>
                    </div>
                </article>
                <article>
                <img width='100%' src={img2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto horizontal 2</h4>
                    </div>
                </article>
            </div>

            <h3>Random</h3>
            <div className='fotografias'>
                <article>
                    <img width='100%' src={imgV1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 1</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={imgV2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 2</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={imgV1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 1</h4>
                    </div>
                </article>
                <article>
                <img width='100%' src={imgV2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 2</h4>
                    </div>
                </article>

                <article>
                    <img width='100%' src={imgV1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 1</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={imgV2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 2</h4>
                    </div>
                </article>
                <article>
                    <img width='100%' src={imgV1} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 1</h4>
                    </div>
                </article>
                <article>
                <img width='100%' src={imgV2} alt='img1' />
                    <div className='infoImg'>
                     <h4 className='hover'>Foto vertical 2</h4>
                    </div>
                </article>
            </div>
        </section>

          <br /><br /><br />
          </main>        
          <Footer />
      </div>
    </>
  );
};
    
export default Galery;