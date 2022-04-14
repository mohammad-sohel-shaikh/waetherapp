import React, { useState } from 'react';
import './App.css';
import {Weather} from './Weather';

function App() {
  const[query,setQuery]=useState('');
  const[weather,setWeather]=useState({});
  const search=async(e)=>{
    if(e.key==='Enter'){
      const data = await Weather(query);
      
      setWeather(data);
      setQuery('');
    }
  }
  return (
      <div className='container'>

        <input type="text" className='serach' placeholder='Search...' value={query}
          onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        {weather.main && (
          <div className='country'>
            <h2 className='country-name'>
              <span className='namecountry'>{weather.name}</span>
              {/* <sup>{weather.sys.country}</sup> */}
            </h2>
            <div className='country-tem'>
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className='about'>
              <img className='country-img' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="somthing wrong" />
              <p className='weathdesc'>{weather.weather[0].description}</p>
            </div>
          </div>
        )}
      </div>
  );
}

export default App;
