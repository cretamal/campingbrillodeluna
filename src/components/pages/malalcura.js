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
            <h1>CERRO MALALCURA</h1>
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
                  CERRO <span className='color'>MALALCURA</span>
                </div>
                <div className='desc'>
                  <p>
                    El origen del Alico y el Malalcura.

                    Dos jóvenes aborígenes enamorados solían caminar por los faldeos de los hermosos cerros que rodeaban las riberas del estero de aguas cristalinas
                    al lado del poblado en aquellos tiempos,
                    libres de toda dominación extraña.
                    transcurrido un tiempo, la bella joven y el fornido muchacho decidieron casarse. En un primer instante el padre de la muchacha, cacique del sector, se opuso a dar su consentimiento, pero dada la insistencia de su hija, aceptó pero puso una condición.
                    para demostrar la fuerza de su amor y su disposición a aceptar sacrificios por ello, les puso una dura prueba. Esta consiste en que en una mañana debían descender desde lo alto de uno de los cerros y llegar a la cima del cerro menor. Pero debían llevar, el joven, una antorcha encendida y ella una olla de greda llena de agua.
                    En la víspera del evento, el cacique envió a un grupo de sus servidores a colocar en un paso que como obligado, una gran cantidad de piedras, para hacer más difícil la prueba.
                    La comunidad de aborígenes estaba enterada y expectante esperando el día de la prueba, donde la juventud apoya a los enamorados.
                    y llegó el día. Muy temprano iniciaron el descenso del cerro más alto: él, con su antorcha encendida y ella con el jarrón de agua. Después de 3 horas llegaron al arroyo de piedras donde la joven echó más agua a su tiesto y de inmediato, con el apoyo de la gente ubicada a orilla de la senda, iniciaron el ascenso del cerro menor.
                    la antorcha se había ido consumiendo y el joven se vio en la obligación de ir introduciendo sus manos en la olla con agua para evitar quemarse. Cuando estaban a metros de la cima, a la olla le quedaba una pequeña porción de agua y el muchacho
                    se vio en la obligación de ir introduciendo sus manos en la olla con agua para evitar quemarse. Cuando estaban a metros de la cima, a la olla le quedaba una pequeña porción de agua y el muchacho luchaba por evitar quemarse turnado el mojarse las manos, llegaron a la meta donde les esperaba un jurado dispuesto
                    por el cacique.Al ver la valentía y el sacrificio de los enamorados el jurado decretó el triunfo de los jóvenes que había calentado con las manos del varón.
                    Todos los circundantes celebraron la valentía y el amor de la pareja aborigen y en su homenaje dieron los nombres con que se conoce hoy a los dos altos cerros que dan abrigo a San Fabián: Malencura, que significa cerco de piedras y Alico, el menor, que significa agua caliente.
                    El cacique, padre de la joven, cuando supo la noticia, cambió de parecer y aceptó la boda y al novio. Se organizo una gran fiesta de celebración con participación de toda la comunidad
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
                  <Link className='active' to="/malalcura">Cerro malalcura</Link>
                </li>
                <li>
                  <Link to="/service1">Interior</Link>
                </li>
                <li>
                  <Link to="/service2">Architecture</Link>
                </li>
                <li>
                  <Link to="/service3">Exterior</Link>
                </li>
              </ul>
              <div className='bannerservice'>
                <div className='imgbg'>
                  <img
                    src="./img/bg-widget.jpg"
                    alt="imgservice"
                  />
                </div>
                <div className='contb'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>

  <Testimony />
  <Footer />
</div>

);
