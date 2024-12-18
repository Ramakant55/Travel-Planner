import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FeaturesSection from './Components/FeaturesSection';
import PromoSection from './Components/PromoSection';
import Try from './Components/Try';
import TripPlanner from './Components/TripPlanner';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
      <Home/>
       <Routes>
         <Route path='login' element={<Login/>}/>
         <Route path='signup' element={<Signup/>}/>
      </Routes>
    <TripPlanner/> 
     </Router>
    <Try/>
    <FeaturesSection/>
    <PromoSection/> 
    <Footer/>
    </>
  );
}

export default App;
