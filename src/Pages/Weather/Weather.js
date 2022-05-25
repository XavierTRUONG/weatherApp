import './Weather.css';
import MainBox from '../../Components/MainBox/MainBox';
import LittleBox from '../../Components/LittleBox/LittleBox';
import Button from '../../Components/Button/Button';



const Weather = () => {

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