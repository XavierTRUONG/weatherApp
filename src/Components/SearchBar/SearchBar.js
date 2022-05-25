import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const SearchBar = () => {

  const [lattitude, setLattitude] = useState(10);

  const location = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const value = location.current.value;
    console.log(value);
    try {
      const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=db988691faf182dfc3750cd1e57f3718`)
      console.log(res.data[0].lat);
      setLattitude(res.data[0].lat);
    } catch (error) {
    console.log(error);
    }
  };

  useEffect(() => {
    location.current.focus();
  }, []);

  return (
    <div className="bar">
      <input type="texte" name="searchInp" id="search" ref={location} className="searchInp"/>
      <button onClick={(e) => handleSubmit(e)}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="logo-glass"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SearchBar;