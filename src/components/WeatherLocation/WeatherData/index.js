import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'

import './styles.css'

const WeatherData = ({data : {temperature, weatherState, humidity, wind}}) => (
    <div className="weatherDataCont">
        <WeatherTemperature className="temperature" temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);

export default WeatherData;