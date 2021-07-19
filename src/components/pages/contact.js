import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from '@reach/router';
import Footer from '../components/footer';


export default function() {

  function sendEmail(e) {

    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }

  return (
    <div>
    <section className='jumbotron breadcumb bigBanner' style={{backgroundImage: `url(${'./img/contacto.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-6'>
                <h1>Contacto</h1>
              </div>
              <div className='col-md-6'>
                <div className='list'>
                  <Link className='link' to="/home">Casa</Link>
                  <span className='dash'>/</span>
                  <span>Contacto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
           <div className="text-side">
             <h2>¿Quieres Visitarnos?</h2>
              <p>Escribenos para darte un mejor servicio y contarte en detalles la bondades de la naturalezas que podras encontrar en Camping Brillo de Luna</p>
              
              <div className='address'>
                <div className='heading'>Cómo Encontrarnos</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                    Carretera camino San Fabian L-31, hasta cruze sector la vega desvio cruce camino macal,  maitenal. desde aqui 2 kilómetros hasta maitenal, sector maitenal 5 km en subida hasta sector la leonera hasta el camping brillo de luna.
                </div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                    <a href='https://www.google.com/maps/dir//Camping+Brillo+de+Luna+Maitenal,+San+Fabi%C3%A1n,+Regi%C3%B3n+del+B%C3%ADo+B%C3%ADo/@-36.5076127,-71.5235552,4430m/data=!3m1!1e3!4m16!1m6!3m5!1s0x966f1fd0de3e9f17:0xaa2f4398539a1695!2sCamping+Brillo+de+Luna+Maitenal!8m2!3d-36.505861!4d-71.530278!4m8!1m0!1m5!1m1!1s0x966f1fd0de3e9f17:0xaa2f4398539a1695!2m2!1d-71.530278!2d-36.505861!3e2?hl=es' target="_blank">
                      Mapa de Comó llegar.
                    </a>
                </div>
                
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:campingbrillodeluna@gmail.com' target='_blank' rel='noopener noreferrer'>
                    campingbrillodeluna@gmail.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  <a href='tel:+569 92404001' target='_blank' rel='noopener noreferrer'>
                    +569 92404001 "Juan guerrero"
                  </a>
                  <br/>
                  <a href='tel:+569 89001713' target='_blank' rel='noopener noreferrer'>
                    +569 89001713 "Carmen sanchez"
                  </a>
                  
                  

                </div>
              </div>
           </div>
          </div>
          <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Mensaje</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Tu mensaje ha sido enviado...</div>
                <div id='failed' className='hide'>Mensaje fallido ...</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Enviar</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
