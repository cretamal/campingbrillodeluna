import React from 'react';
import Slider from '../components/sliderhome';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import { Link } from '@reach/router';


export default () => (
  <div>
      <section className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
      </section>

      <section className='container-fluid p-0'>
        <div className='row'>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                {/* <img
                    src="./img/bg-serv-1.jpg"
                    alt="bg-features"
                  /> */}
              </div>
              <div className='content'>
                <div className='heading'>
                  Camping
                </div>
                <div className='con-text'>
                 Un lugar magnifico para realizar<br/> camping y vida en la naturaleza.
                </div>
                {/* <div className='link'>
                  <span className="shine"></span>
                  Ver más
                </div> */}
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                {/* <img
                    src="./img/bg-serv-2.jpg"
                    alt="bg-features"
                  /> */}
              </div>
              <div className='content'>
                <div className='heading'>
                  Trekking
                </div>
                <div className='con-text'>
                  Una excursion inolvidable por un bosque<br/> lleno de colores y encantos.
                </div>
                {/* <div className='link'>
                  <span className="shine"></span>
                  Ver más
                </div> */}
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                {/* <img
                    src="./img/bg-serv-3.jpg"
                    alt="bg-features"
                  /> */}
              </div>
              <div className='content'>
                <div className='heading'>
                  Cabalgata
                </div>
                <div className='con-text'>
                  Cabalga por lugares recondidos y conoce mas<br/> de las hermosa naturaleza que nos rodea.
                </div>
                {/* <div className='link'>
                  <span className="shine"></span>
                  Ver más
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </section>
              <br/>
              <br/>
              <br/>
      <section className='container-fluid black pb-0'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              CAMPING<span className='br'></span>BRILLO DE<span className='br'></span>LUNA
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              preservamos la naturaleza como lugar sagrado respetando nuestro ecosistema.
            </div>
            <div className='content'>
              somos un lugar de retiro, familiar, especial para disfrutar los sonido de la naturalesa y bondades que nos entrega este lugar sagrado.
            </div>
            <div className='content'>
              
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid pt-0 black'>
        <div className='row m-10-hor'>
         <div className='col-md-12 mt-12'>         

        <div className='heading'>Nuestras Atracciones</div>
          <p className='content'>
            En Camping brillos de luna encontraras lugares para disfrutar de momentos inicos.
            podras disfrutar de la naturaleza, expediciones, camping, laguna.
          </p>
        </div>
        </div>
    </section>
    <section className='container-fluid pt-0 black'>
      <div className='row m-10-hor'>
        <div className='col-md-12 mt-12'>          
          <section className='container-fluid p-md-0'>
            <div className='row'>

              <div className='col-md-6'>
                <img src='./img/thumb-malalcura.jpg' alt='imgbanner' className='w-100 border-radius'/>
              </div>
              <div className='col-md-6 centered'>
                <div>
                  {/* <div className="subheading mt-md-0 mt-5">
                    Cerro
                  </div> */}
                  <div className="heading">
                    Cerro Malalcura
                  </div>
                  <p>
                    Ruta de trekking para escalar el Cerro Malalcura por su cara sur, con vistas al Valle y laguna el Valiente. El cerro Malalcura es conocido en la zona por sus excelentes paredes para realizar escalada tradicional.
                    {/* <span className='br'></span>Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                    <span className='br'></span>nisl non rutrum commodo, sem magna. */}
                  </p>

                  <Link className='btn' to="/malalcura">
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
    <section className='container-fluid pt-0 black'>
      <div className='row m-10-hor'>
        <div className='col-md-12 mt-12'>          
          <section className='container-fluid p-md-0'>
            <div className='row'>

              <div className='col-md-6'>
                <img src='./img/thumb-laguna-el-valiente.jpg' alt='imgbanner' className='w-100 border-radius'/>
              </div>
              <div className='col-md-6 centered'>
                <div>
                  {/* <div className="subheading mt-md-0 mt-5">
                    Cerro
                  </div> */}
                  <div className="heading">
                    Laguna El Valiente
                  </div>
                  <p>
                    Ruta de trekking a la laguna El Valiente, en su valle homónimo en San Fabian de Alico. Para poder realizar este sendero se puede hacer por el día o acampando en el camping Camping Brillo de Luna.
                    {/* <span className='br'></span>Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                    <span className='br'></span>nisl non rutrum commodo, sem magna. */}
                  </p>

                  <Link className='btn' to="/elvaliente">
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
    <section className='container-fluid pt-0 black'>
      <div className='row m-10-hor'>
        <div className='col-md-12 mt-12'>          
          <section className='container-fluid p-md-0'>
            <div className='row'>

              <div className='col-md-6'>
                <img src='./img/thumb-cerro-alto-del-padre.jpg' alt='imgbanner' className='w-100 border-radius'/>
              </div>
              <div className='col-md-6 centered'>
                <div>
                  {/* <div className="subheading mt-md-0 mt-5">
                    Cerro
                  </div> */}
                  <div className="heading">
                    Cerro Alto del Padre
                  </div>
                  <p>
                    El cerro Alto del Padre con sus 3349 m de altura forma parte de las cumbres más sencillas de subir en el sector del volcán  Tinguiririca y se caracteriza por su maravillosa vista
                    {/* <span className='br'></span>Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, 
                    <span className='br'></span>nisl non rutrum commodo, sem magna. */}
                  </p>

                  <Link className='btn' to="/altodelpadre">
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


    
    

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Nuestro Equipo de Trabajo</div>
            <div className='heading'>Quienes somos</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Somos fiel creyentes de que cada parte del equipo es importante.</p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    
    <Pricing />
    <Testimony />    
    <Footer />

  </div>
);
