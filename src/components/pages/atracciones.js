import React from 'react';
import { Link } from '@reach/router';
import ImageGallery from "../components/ImageGallery";
import Footer from '../components/footer';


export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/porto.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Atracciones</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/">Home</Link>
              <span className='dash'>/</span>
              <span>Atracciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
            CAMPING<span className='br'></span>BRILLO DE<span className='br'></span>LUNA
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              somos un lugar de retiro, familiar, especial para disfrutar los sonido de la naturalesa y bondades que nos entrega este lugar sagrado.
            </div>            
          </div>
        </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12'>
        <div className='AppContainer'>
          <ImageGallery />
        </div>
      </div>
    
    </div>
  </section>

  <Footer />
</div>

);
