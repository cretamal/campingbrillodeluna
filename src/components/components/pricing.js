import React from 'react';

export default () => (
  <section className='container-fluid box-precios'>
        <div className='row m-10-hor'>

        <div className='col-12 text-center'>
          {/* <div className='subheading'>Nuestros Precios</div> */}
          <div className='heading'>Nuestros Precios</div>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <p className='content'>
                Conoce los precio y actividades que mas te acomoden.
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist'>
            <div className="icon-thumb">
              <img src='./img/trekking.png' alt='icon' />
            </div>
            <div className="heading">Acceso Diario</div>
            <div className="bigprice"><span className='text-gradient'>$2.000</span></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Por Persona</li>              
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist'>
            <div className="icon-thumb">
              <img src='./img/tienda.png' alt='icon' />
            </div>
            <div className="heading">Camping</div>
            <div className="bigprice"><span className='text-gradient'>$4.000</span></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Por Persona</li>
              <li><i className="fa fa-check"></i> 1 Noche</li>
              <li><i className="fa fa-check"></i> Quincho</li>
              <li><i className="fa fa-check"></i> Baños</li>
              <li><i className="fa fa-check"></i> Atracciones</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist'>
            <div className="icon-thumb">
              <img src='./img/lago.png' alt='icon' />
            </div>
            <div className="heading">Treking Laguna El Valiente</div>
            <div className="bigprice"><span className='text-gradient'>$15.000</span> <small> Grupo guiado</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> 8 persona maximo</li>
              <li><i className="fa fa-check"></i> Tiempo subida 1:30hr aprox</li>              
            </ul>
          </div>
        </div>     

        <div className='col-md-4'>
          <div className='pricelist'>
            <div className="icon-thumb">
              <img src='./img/montanas.png' alt='icon' />
            </div>          
            <div className="heading">Treking Cerro Alto del Padre</div>
            <div className="bigprice"><span className='text-gradient'>$30.000</span> <small>Grupo guiado</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> 8 persona maximo</li>
              <li><i className="fa fa-check"></i> Tiempo subida 3:00hr aprox</li>              
              <li><i className="fa fa-check"></i> Llegada a la cima del cerro</li>
            </ul>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='pricelist'>
          <div className="icon-thumb">
              <img src='./img/montanas2.png' alt='icon' />
            </div>
            <div className="heading">Treking Malalcura norte</div>
            <div className="bigprice"><span className='text-gradient'>$35.000</span> <small>Grupo guiado</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> 8 persona maximo</li>
              <li><i className="fa fa-check"></i> Tiempo subida 4:00hr aprox</li>              
              <li><i className="fa fa-check"></i> Llegada a la cima del cerro</li>
            </ul>
          </div>
        </div>

        </div>
    </section>
  
);
