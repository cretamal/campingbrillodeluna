import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Loader from './menu/loader';
import Header from './menu/header';
import Home from './pages/home';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import About from './pages/about';
import Team from './pages/team';
import Price from './pages/price';
import Atracciones from './pages/atracciones';
import Malalcura from './pages/malalcura';
import ElValiente from './pages/elvaliente';
import AltoDelPadre from './pages/altodelpadre';
import Service1 from './pages/service1';
import Service2 from './pages/service2';
import Service3 from './pages/service3';
import Blog from './pages/blog';
import Contact from './pages/contact';

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
        <Loader/>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

export default () => (
  <div className="wraper">
  
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        
        <Home1 path="/home1" />
        <Home2 path="/home2" />
        <About path="/about" />
        <Team path="/team" />
        <Price path="/price" />
        <Atracciones path="/atracciones" />
        <Malalcura path="/malalcura" />
        <ElValiente path="elvaliente" />
        <AltoDelPadre path="altodelpadre" />
        <Service1 path="/service1" />
        <Service2 path="/service2" />
        <Service3 path="/service3" />
        <Blog path="/blog" />
        <Contact path="/contact" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    <div class="btn-whatsapp">
      <a href="https://wa.me/56992404001" target="_blank">
        <img src="./img/whatsapp.png" />
      </a>
    </div>
    
  </div>
);
