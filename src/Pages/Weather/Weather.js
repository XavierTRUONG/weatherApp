import './Weather.css';
import React, { useEffect } from 'react';
import axios from 'axios';


const Weather = (props) => {

    console.log(props);

    const getDataWeather = async () => {
        try {
            const res = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=db988691faf182dfc3750cd1e57f3718')
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect (() => {
        getDataWeather();
    }, []);


    return ( 
        <div className="weather">
            <h2>Weather</h2>
        </div>
     );
}
 
export default Weather;