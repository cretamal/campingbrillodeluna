import React, {useState, useEffect} from 'react';
import Slider from '../components/sliderhome';
import Carouselteam from '../components/carouselteam';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import { Link } from '@reach/router';
import axios from "axios";


export default () => {
  const [shortCut, setData] = useState([]);
  const [somosHome, setDataSomosHome] = useState([]);
  const [shortCutAtractions, setDataAtraction] = useState([]);
  const [shortCutAtractionsArray, setDataAtractionArray] = useState([]); 
  const [somos, setDataSomos] = useState([]); 

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/short-cut-home`
        );
        setData(data.ShortCut);        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/short-cut-atraccion`
        );
        console.log('short-cut-atraccion:', data.Atraccione);        
        setDataAtraction(data);
        setDataAtractionArray(data.Atraccione);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/somos-home`
        );
        console.log('somos Home:', data);        
        setDataSomosHome(data);        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/somos`
        );             
        console.log('somos***', data);
        setDataSomos(data);        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

  


    return(
      <div>          
          <section className="jumbotron jumbomain">
              {/* Slider Big banner Home*/}
              <Slider />          
              <div className="icon-scroll-wraper">
                <div className="icon-scroll">
                  <div className="icon-scroll-screen"></div>
                </div>
              </div>
          </section>
          <section className='container-fluid box-features'>
            <div className='row'>
              <div className="scene">
                <div className="img-scene hoja-left"><img src='./img/hoja.svg' alt='hoja' /></div>
              </div>
              {shortCut.map((item, index) => ( 
                <div className='col-md-4 p-0'>
                  <div className='features feat1'>              
                    <div className='content'>
                      <div className='heading'>
                          {item.title}
                      </div>
                      <div className='con-text'>
                      {item.description}
                      </div>                      
                    </div>
                  </div>
                </div>
              ))};
            </div>
          </section>
          <br/>
          <br/>
          <br/>
          <section className='container-fluid box-camping-brillodeluna'>
            <div className='row m-10-hor'>

              <div className='col-md-5'>
                <div className='heading'>
                  {somosHome.title}
                  {/*CAMPING<span className='br'></span>BRILLO DE<span className='br'></span>LUNA*/}
                </div>
              </div>
              <div className='col-md-7'>
                <div className='content'>
                  {somosHome.description}
                </div>                
              </div>
            </div>
          </section>


        <section className='container-fluid box-atracciones'>
            <div className='row m-10-hor'>
            <div className='col-md-12 mt-12'>         

            <div className='heading'>{shortCutAtractions.title}</div>
              <p className='content'>
                {shortCutAtractions.description}
              </p>
            </div>
            </div>
        </section>
        {
          shortCutAtractionsArray.map((item, index) => (
            <section className='container-fluid pt-0 black'>
              <div className='row m-10-hor'>
                <div className='col-md-12 mt-12'>          
                  <section className='container-fluid p-md-0'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <img src={'https://backend.campingbrillodeluna.cl'+item.image.url} alt='imgbanner' className='w-100 border-radius'/>
                      </div>
                      <div className='col-md-6 centered box-item'>
                        <div>                      
                          <div className="heading">
                            {item.title}
                          </div>
                          <p>
                          {item.description}
                          </p>
                          <Link className='btn' to={'atraccion/'+item.linkButton} state={{name:'zayne'}}>
                            <span className="shine"></span>
                            <span>Saber Más</span>
                          </Link>
                        </div>
                      </div>                      
                    </div>
                  </section>
                </div>
              </div>      
            </section>           
          ))
        };

        <section className='container-fluid bg-about'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <div className='subheading'>{somos.title}</div>
                <div className='heading'>{somos.subTitle}</div>
                <div className='row'>
                  <div className='col-md-8 mx-auto'>
                    <p className='content'>
                      {somos.description}  
                    </p>
                  </div>
                </div>
              </div>
              <Carouselteam />
            </div>
        </section>
        
        <Pricing />
        
        
        <Footer />

      </div>
    )
  };
