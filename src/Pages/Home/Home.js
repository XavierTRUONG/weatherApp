import SearchBar from '../../Components/SearchBar/SearchBar';
import './Home.css';


const Home = (props) => {
    console.log(props);
    return ( 
        <div className="homeSearch">
            <h1>The Forecast Weather App</h1>
            <SearchBar />
        </div>
     );
}
 
export default Home;