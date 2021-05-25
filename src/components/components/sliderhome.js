import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Camping Brillo de Luna",
    description: "",
    button: "Conoce más",
    link: "/#",
    image: "https://campingbrillodeluna.cl/img/bg-camping.jpeg"
  },
  // {
  //   title: "Camping Brillo de Luna",
  //   description:
  //     "Vuelve a lo esencial",
  //   button: "Conoce más",
  //   link: "/#",
  //   image: "http://campingbrillodeluna.cl/img/bg-1.jpg"
  // },
  // {
  //   title: "Un Compañero",
  //   description:
  //     "Todo Terreno",
  //   button: "Conoce más",
  //   link: "/#",
  //   image: "http://campingbrillodeluna.cl/img/bg-2.jpg"
  // },
  // {
  //   title: "Una Aventura... ",
  //   description:
  //     "un camino inolvidable",
  //   button: "Conoce más",
  //   link: "/#",
  //   image: "http://campingbrillodeluna.cl/img/bg-3.jpg"
  // }
];

export default () => (
  <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="bg-overlayer"></div>
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={()=> window.open(item.link, "_self")}>
              <span className="shine"></span>
              <span>
                {item.button}
              </span>
            </button>
          </div>
        </div>
      ))}
  </Slider>
);
