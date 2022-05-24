import SearchBar from '../../Components/SearchBar/SearchBox';
import './Home.css';


const Home = () => {
    return ( 
        <div className="homeSearch">
            <h1>The Forecast Weather App</h1>
            <SearchBar/>
        </div>
     );
}
 
export default Home;