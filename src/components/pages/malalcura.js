import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

export default () => {
  return (
  <Router>
    <Switch>
      <Route path="/:id" children={<Child />} />
    </Switch>
  </Router>
)};

function Child() {
  let match = useRouteMatch("/atraccion/:id");
  console.log('Atraccion', match.params.id);

  const [interiorData, setData] = useState([]);
  const [backgroundPageBanner, setBannerImage] = useState([]);
  const [tags, setDataTags] = useState([]);
  

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/atraccions`
        );
        // console.log('atraccions', data);
        const dataPage = data.filter(data => data.tag['name'] === match.params.id);
        setBannerImage('https://backend.campingbrillodeluna.cl'+dataPage[0].Interior.banner[0].url);
        console.log('dataPage', 'https://backend.campingbrillodeluna.cl'+dataPage[0].Interior.banner[0].url);

        setData(dataPage);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, [0]);


  useEffect(() => {
    const fetchData = async () =>{
      try {
        const { data } = await axios.get(
          `https://backend.campingbrillodeluna.cl/tags`
        );
          console.log('tags', data);
        setDataTags(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();   
  }, [0]);

  return (
    <div className='wraperitem'>
      { interiorData.length > 0 ? 
        <div>
          <section className='jumbotron breadcumb bigBanner' style={{backgroundImage: `url( ${backgroundPageBanner} )`}}>
            <div className='mainbreadcumb'>
              <div className='container-fluid'>
                <div className='row m-10-hor'>
                  <div className='col-md-6'>
                    <h1>{interiorData[0].Interior.TitlePage}</h1>
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
                  <div className='content'>
                    <div className='title'>
                      {interiorData[0].Interior.TitlePage}
                    </div>
                    <div className='desc'>
                      <p>
                        {interiorData[0].Interior.descriptionPage}
                      </p>                  
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='right'>
                  <ul className='services-list'>
                    <h3>Todos</h3>
                    {
                      tags.map((item, index) => (
                        <li>
                          <Link to={`/atraccion/${item.name}`}>{item.Title}</Link>
                        </li>
                      ))
                    }
                  </ul>                  
                </div>
              </div>
            </div>
          </section>
        </div>
      : null }

      <Testimony />
      <Footer />

    </div>
  );
}

