import React, {useState, useEffect} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';
import ReactPlayer from 'react-player'
import axios from "axios";



export default () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]) 

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://backend.campingbrillodeluna.cl/big-banner-home');        
        setData(response.Banner);
        console.log('response', response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();   
  }, []);

  return(
    <div>   
      {loading && <div>Loading</div>}
      {!loading && (
        <Slider className="slider-wrapper">      
        {data.map((item, index) => (
          <div key={index} className="slider-content">
            <div div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              { item.CallToAction != null ? 
                <button onClick={()=> window.open(item.CallToAction.url, "_self")}>              
                  <span>
                    {item.CallToAction.label}
                  </span>
                </button> : null
              }
            </div> 
            <div className="box-media">
              {(item.activeVideo === true) ? (
                <ReactPlayer url={item.urlVideo} />
              ) : (                
                <img src={'https://backend.campingbrillodeluna.cl'+item.image.url} alt="Imageteam" />
              )}
            </div>

          </div>
        ))}
        </Slider>
      )}
    </div>
  )  
};
