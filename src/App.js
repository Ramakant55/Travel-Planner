import React from 'react';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import AllTours from './Components/AllTours';
import Helper from './Components/Helper';

function App() {
  return (
    <>
    <Router>
      <Home/>
       <Routes>
        <Route path="/" element={<Helper />} />
         <Route path='login' element={<Login/>}/>
         <Route path='signup' element={<Signup/>}/>
         <Route path='alltours' element={<AllTours/>}/>
      </Routes>
     <Footer/>
     </Router>
    </>
  );
}

export default App;
