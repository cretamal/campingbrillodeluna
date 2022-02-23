import React from 'react';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {  
  const success = document.getElementById("success");
  const button = document.getElementById("buttonsent");
  const failed = document.getElementById("failed");
  e.preventDefault();

  alert('sendEmail');

  // emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
  //   .then((result) => {
  //       console.log(result.text);
  //       success.classList.add('show');
  //       button.classList.add('show');
  //       failed.classList.remove('show');
  //   }, (error) => {
  //       console.log(error.text);
  //       failed.classList.add('show');
  //   });
}

export default () => (
  <footer className='container-fluid box-footer'>
    <div className="bg-footer"></div>
    <div className="scene">
      <div className="img-scene carpa-footer"><img src='./img/carpa.svg' alt='hoja' /></div>
    </div>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Camping Brillo de Luna
          </div>
          <div className='content'>
            <p>Contactanos</p>
          </div>
          <div className="short-form">
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
          

          <br/>
          <br/>
          <br/>

          <div className='link-call' onClick={()=> window.open("mailto:campingbrillodeluna@gmail.com", "_self")}>campingbrillodeluna@gmail.com</div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='box-maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0000422430617!2d-71.53246648471836!3d-36.50586108001034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMwJzIxLjEiUyA3McKwMzEnNDkuMCJX!5e0!3m2!1ses!2scl!4v1621911725385!5m2!1ses!2scl" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>    



      
      {/* <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
             <div className='link'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Brand Identity</div>
            <div className='link'>Investment</div>
            <div className='link'>Agency Patner</div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>Malesuada id, tempor eu, gravida id, odio.
               Maecenas suscipit.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2021 <span className='font-weight-bold'>campingbrillodeluna.cl</span> Todo los derechos reservados.</div>
        </div>
      </div>
    </div>
    
  </footer>
);
