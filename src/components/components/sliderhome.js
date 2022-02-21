import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import ReactPlayer from 'react-player'

const content = [
  {
    title: "Camping Brillo de Luna",
    description: "Vista desde el Aire",
    button: "Conoce más",
    link: "/atracciones",
    image: "https://campingbrillodeluna.cl/img/bg-camping.jpeg",
    video: 'https://youtu.be/aB6g6yN6xx0'
  },
  {
    title: "Camping Brillo de Luna",
    description: "Vista desde el Aire",
    button: "Conoce más",
    link: "/atracciones",
    image: "http://campingbrillodeluna.cl/img/bg-1.jpg",
    video: 'https://youtu.be/9LsBDFvfFg4'
  },
  {
    title: "Camping Brillo de Luna",
    description: "Treking",
    button: "Conoce más",
    link: "/atracciones",
    image: "http://campingbrillodeluna.cl/img/bg-1.jpg",
    video: 'https://youtu.be/2nz5zmTkBtk'
  }
];

export default () => (
  <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div key={index} className="slider-content">
          <div div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={()=> window.open(item.link, "_self")}>              
              <span>
                {item.button}
              </span>
            </button>
          </div>          

          <div className="box-media">
            <ReactPlayer url={item.video} />
          </div>

        </div>
      ))}
  </Slider>
);
