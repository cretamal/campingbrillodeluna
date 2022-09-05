import React, {useState, useEffect} from 'react';
import emailjs from 'emailjs-com';
import { Link } from '@reach/router';
import Footer from '../components/footer';
import axios from "axios";


export default () => {

  // function sendEmail(e) {
  //   const success = document.getElementById("success");
  //   const button = document.getElementById("buttonsent");
  //   const failed = document.getElementById("failed");
  //   e.preventDefault();

  //   emailjs.sendForm('gmail', 'template_csfdEZiA', e.target, 'user_zu7p2b3lDibMCDutH5hif')
  //     .then((result) => {
  //         console.log(result.text);
  //         success.classList.add('show');
  //         button.classList.add('show');
  //         failed.classList.remove('show');
  //     }, (error) => {
  //         console.log(error.text);
  //         failed.classList.add('show');
  //     });
  // }

  const [contactData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/contact-page`
        );
        console.log('contacData', data);
        setData(data.Indication);    
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

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
      <section className='container-fluid box-contact'>
        <div className='row m-10-hor'>
          <div className='col-md-12'>
           <div className="text-side">
              <div className='box-como-llegar'>
                <div className='heading'>Cómo Encontrarnos</div>
                {
                  contactData.map((item, index) => (                    
                    <div className='list'>                                        
                      <p className='title'>{item.title}</p>
                      <i className="fa fa-angle-double-right"></i>                     
                        
                      {
                        {
                          "Indicación" : <p>{item.description}</p>,
                          "Mapa" : <a href={item.linkExterno} target="_blank">{item.description}</a>,
                          "Correo" : <a href={`mailto:${item.linkExterno}`}>{item.linkExterno}</a>,
                          "Telefono" : <a href={`tel:${item.linkExterno}`}>{item.linkExterno}</a>,
                          "Reglamento Interno" : <p>{item.description}</p>,
                          
                        }[item.title]
                      }

                      
                      

                    </div>                    
                  ))
                };                
              </div>
           </div>
          </div>          
        </div>
      </section>
      <Footer />
    </div>
  );
}
