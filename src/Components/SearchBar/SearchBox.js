import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

const SearchBar = () => {
    return ( 
        <div className="bar">
            <input type="search" name='searchInp' id='search' className='searchInp'/>
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='logo-glass'></FontAwesomeIcon>
            </button>
        </div>
     );
}
 
export default SearchBar;