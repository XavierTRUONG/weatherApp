import { BrowserRouter as Router } from 'react-router-dom';

import AllRoutes from './Components/AllRoutes/Allroutes';

import './App.css';
import { ContextProvider } from './Components/Context/AuthContext';


function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <AllRoutes/>
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
