import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import Weather from "../../Pages/Weather/Weather";


const AllRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/weather" element={ <Weather/> }/>
            <Route path="*" element={ <NotFound/> }/>
        </Routes>
     );
}
 
export default AllRoutes;