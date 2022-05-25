import './MainBox.css';

const MainBox = () => {
    return ( 
        <div className="mainBox">
            <h2>Date</h2>
            <ul>
                <li className='itemsLeft'>Jour</li>
                <li className='itemsLeft'>Nuit</li>
                <li className='itemsLeft'>Humidité</li>
                <li className='itemsRight'>Pression</li>
                <li className='itemsRight'>Vent</li>
            </ul>
        </div>
     );
}
 
export default MainBox;