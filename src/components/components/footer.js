import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.jpg' alt='bg-footer'/>
  </div>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>Camping Brillo de Luna</h2>
          </div>
          <div className='content'>
            <p>_______________</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:campingbrillodeluna@gmail.com", "_self")}>campingbrillodeluna@gmail.com</div>
        </div>
      </div>
      <div className='col-md-4'>
        <div classNme='box-maps'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.0000422430617!2d-71.53246648471836!3d-36.50586108001034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDMwJzIxLjEiUyA3McKwMzEnNDkuMCJX!5e0!3m2!1ses!2scl!4v1621911725385!5m2!1ses!2scl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
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
