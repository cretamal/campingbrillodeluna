import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
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
  constructor() {
    super();
    this.state = {
      teamWork: []
    };
  }
  componentWillMount = () => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/somos`
        );             
        console.log('Team Work***', data);
        this.setState({ teamWork: data });        
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }

  render() {
    const { teamWork } = this.state;
    const teamWorkSlider  = teamWork.TeamWortk;
    console.log('teamWorkSlider**', teamWorkSlider);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='slickteam'>
        <Slider {...settings}>
          { teamWorkSlider != undefined ?
            teamWorkSlider.map((item, index) => (
              <CustomSlide className='itm' index={index}>
                <div className='bg'>
                  <img
                    src={'https://backend.campingbrillodeluna.cl'+item.image.url}
                    className="img-fluid"
                    alt="Imageteam"
                  />
                </div>
                <div className='desc'>
                  <div className='name'>{item.name}</div>
                  <div className='title'>{item.role}</div>
                </div>            
              </CustomSlide>
            ))
            : null
          }
          
          
        </Slider>
      </div>
    );
  }
}
