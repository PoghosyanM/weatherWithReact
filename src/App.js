import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Search from './components/search/Search';
import './App.css';
import { baseURL, appId, forecast, weather } from './helpers/url';
import Content from './components/content/Content';
function App() {
  const [country, setCountry] = useState("yerevan");
  const [data, setData] = useState({})
  const [dataDay, setDataDay] = useState({})
  useEffect(()=>{
    axios(`${baseURL}${forecast}${country}${appId}`)
    .then( resp => setData(resp.data) )
  },[country])

  useEffect(()=>{
    axios(`${baseURL}${weather}${country}${appId}`)
    .then( resp => setDataDay(resp.data) )
    .catch( err => {
      
    })
  },[country])
  return (
    <div>
      <Search setCountry={setCountry} />
      <Content data={data} dataDay={dataDay} />
    </div>
  );
}

export default App;
