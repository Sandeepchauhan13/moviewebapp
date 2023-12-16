import React,{useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Profile from '../src/pages/Profile';

import Navbar from '/components/Navbar';
import Home from '../src/pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import Alert from './pages/Alert';

const App = () => {
const  [alert, setAlert]= useState(null);

const showAlert = (message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },2000);
}

 

  return(
   <>
 <AuthContextProvider>
  <Navbar />
  <Alert alert={alert}/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login    showAlert={showAlert}/>} />
    <Route path="/signup" element={< Signup   showAlert={showAlert} />} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
  </Routes>
  </AuthContextProvider>
 

 
    

  
  </>

   
    
    
  );  
    
   
    
  
};

export default App;
