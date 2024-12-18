import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Hotels from './Components/Hotels';
import Homepage from './Components/Homepage';

function App() {
  return (
    <>
     <Router>
      <Home/>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='signup' element={<Signup/>}/>
         <Route path='hotels' element={<Hotels/>}/>
      </Routes>
<<<<<<< HEAD
    
     </Router>
   
    <Footer/> 
    
=======
     </Router>
    <TripPlanner/> 
     <Try/>
   <FeaturesSection/>
    <PromoSection/> 
    <Footer/>
>>>>>>> 7658fff826efdcf12e53219480e4d4ed11daca13
    </>
  );
}

export default App;
