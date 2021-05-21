import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
    <section className='container-fluid  wraper-testimony' 
    style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...settings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                    Completamente recomendable para desconectarte y disfrutar de la naturaleza
                  </p>
                  <div className="bytesti">
                    Carlos Retamal
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                    Una lugar magico para la relajacion y vida de campo
                  </p>
                  <div className="bytesti">
                    Daniela Paredes
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                    La administracion muy buena y confortable, siempre te sentiras en casa
                  </p>
                  <div className="bytesti">
                    Papa Chaleco
                  </div>
                </div>
              </div>
            </CustomSlide>

            

          </Slider>
        </div>
      </div>
    </section>
    );
  }
}
