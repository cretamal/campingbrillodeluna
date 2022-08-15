import React, {useState, useEffect} from 'react';
import axios from "axios";
import ReactMarkdown from 'react-markdown'

export default () => {
  const [services, setServicesData] = useState([]);
  const [servicesItem, setServiceItemData] = useState([]);
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/services`
        );
        console.log('services:', data);
        setServicesData(data);   
        setServiceItemData(data.Service)     
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, []);

    return (
      <section className='container-fluid box-precios'>
          <div className='row m-10-hor'>

          <div className='col-12 text-center'>
            {/* <div className='subheading'>Nuestros Precios</div> */}
            <div className='heading'>{services.title}</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  {services.description}
                </p>
              </div>
            </div>
          </div>
          {
            servicesItem.map((item, index) => (
              <div className='col-md-4'>
                <div className='pricelist'>
                  <div className="icon-thumb">                  
                    <img src={'https://backend.campingbrillodeluna.cl'+item.icon.url} alt='icon' />
                  </div>
                  <div className="heading">{item.title}</div>
                  <div className="bigprice">
                  <span className='text-gradient'>
                    {item.price}
                  </span>
                  {
                    item.condition != null ? 
                    <small>{item.condition}</small>
                    : null
                  }
                  

                  </div>
                  <ul className="list">                    
                    <li>
                      <ReactMarkdown>
                        {item.description}
                      </ReactMarkdown>
                    </li>
                  </ul>
                </div>
              </div>
            ))            
          }

          

         

          </div>
      </section>
    )
  
  
};
