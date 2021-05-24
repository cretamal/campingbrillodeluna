import React from 'react';
import { Link } from '@reach/router';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
<div className='wraperitem'>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>LAGUNA EL VALIENTE</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid' id="service">
        <div className='row m-10-hor'>
          <div className='col-md-8'>
            <div className='left'>
              {/* <div className='mainimg'>
                <img
                    src="./img/service.jpg"
                    alt="imgservice"
                  />
              </div> */}
              <div className='content'>
                <div className='title'>
                  LAGUNA <span className='color'>EL VALIENTE</span>
                </div>
                <div className='desc'>
                  <p>
                    Ruta de trekking a la laguna El Valiente, en su valle homónimo en San Fabian de Alico. Para poder realizar este sendero se puede hacer por el día o acampando en el camping Camping Brillo de Luna. Desde aquí es posible también realizar otros senderos al Cerro El Valiente, Cerro Alto del Padre o Cerro Malalcura norte.
                  </p>                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='right'>
              <ul className='services-list'>
                <li>
                  <Link to="/atracciones">Todos</Link>
                </li>
                <li>
                  <Link className='active' to="/elvaliente">Laguna El Valiente</Link>
                </li>
                <li>
                    <Link to="/malalcura">Cerro Malalcura</Link>
                </li>
                <li>
                    <Link to="/altodelpadre">Cerro Alto Del Padre</Link>                  
                </li>
                
              </ul>
              <div className='bannerservice'>
                <div className='imgbg'>
                  <img
                    src="./img/bg-widget.jpg"
                    alt="imgservice"
                  />
                </div>
                {/* <div className='contb'>
                  <div className='headingb'>
                    Get A quote 
                  </div>
                  <div className='descb'>
                    With Experts Advice 
                  </div>
                  <div className="btn" onClick={()=> window.open("/#", "_self")}>
                    <span className="shine"></span>
                    <span>Download here</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
  </section>

  <Testimony />
  <Footer />
</div>

);
