import './Button.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
    const backHome = () => {
        navigate('/');
    }
    return ( 
        <div className="buttonBack" onClick={backHome}>
            <FontAwesomeIcon icon={faArrowLeft} className="logo-arrow"></FontAwesomeIcon>
        </div>
     );
}
 
export default Button;