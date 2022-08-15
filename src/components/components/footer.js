import React, { useEffect} from 'react';
// import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import axios from "axios";
import { send } from 'emailjs-com';




export default () => {

  const sendMailContact = (e) => {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();    
  }

  const send = (_dataForm) => {
    const dataForm = _dataForm;

    axios.post('https://public.devfun.cl/sendMailCampingBrillodeLuna', dataForm)
    .then( (response) => {
      console.log('send mail', response);
    })
    .catch( (error) => {
      console.log('send mail', error);
    });
  }

  useEffect(() => {
    
    
  },[]);

  return (
    <footer className='container-fluid box-footer'>
    <div className="bg-footer"></div>
    <div className="scene">
      <div className="img-scene carpa-footer"><img src='./img/carpa.svg' alt='hoja' /></div>
    </div>
    <div className='row m-10-hor'>
      <div className='col-md-5'>
        <div className='footer-col'>
          <div className='heading'>
            Camping Brillo de Luna
          </div>
          <div className='content'>
            <p>Contactanos</p>
          </div>
          <div className="short-form">
            <Formik
            initialValues={{ name:'', email: '', message: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // sendMailContact();
                send(values);

                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form className="formcontact" onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} required />
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} required/>
                <label>Mensaje</label>
                <textarea type="text" name="message" onChange={handleChange} onBlur={handleBlur} value={values.message} required/>
                

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
            </Formik>       
          </div>
          <div className='link-email' onClick={()=> window.open("mailto:campingbrillodeluna@gmail.com", "_self")}>campingbrillodeluna@gmail.com</div>
        </div>
      </div>
      <div className='col-md-7'>
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
  )



};
