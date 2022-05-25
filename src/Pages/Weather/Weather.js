import './Weather.css';
// import React, { useEffect } from 'react';
// import axios from 'axios';
import MainBox from '../../Components/MainBox/MainBox';
import LittleBox from '../../Components/LittleBox/LittleBox';
import Button from '../../Components/Button/Button';


const Weather = () => {


    // const getDataWeather = async () => {
    //     try {
    //         const res = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=db988691faf182dfc3750cd1e57f3718')
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect (() => {
    //     getDataWeather();
    // }, []);


    return ( 
        <div className="weather">
            <LittleBox/>
            <LittleBox/>
            <LittleBox/>
            <LittleBox/>
            <LittleBox/>
            <LittleBox/>
            <Button/>
            <MainBox/>
        </div>
     );
}
 
export default Weather;