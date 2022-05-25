import './Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
    return ( 
        <div className="buttonBack">
            <FontAwesomeIcon icon={faArrowLeft} className="logo-arrow"></FontAwesomeIcon>
        </div>
     );
}
 
export default Button;