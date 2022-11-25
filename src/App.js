import './App.css';
import Sector1 from './Sectors/sector1';
import Dashboard from './Dashboard/dashBoard';
import Home from './Home/home';
import SignIn from './SignIn/signIn';
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import PrivateRoutes from './utils/privateRoutes.js'; 
import axios from 'axios'; 
function App() {
  React.useEffect(()=>{axios({
    method: 'post',
    url:"http://localhost:4000/login",
    headers: {'Content-Type': 'application/json'}, 
    withCredentials:true
    }).then(response=>{
        localStorage.setItem("isLoggedIn",JSON.stringify(response.data));
    });
  },[]);
  return (
      <div className='App'>
          <Routes>
            <Route exact path="/sonicLibrarySystem-frontend/" element={ <Home/> } />
            <Route exact path="/sonicLibrarySystem-frontend/signIn" element={ <SignIn/> } />
            <Route path="*" element={<Navigate to="/sonicLibrarySystem-frontend/" replace />}/>
            <Route  element={<PrivateRoutes/>} >
              <Route exact path="/sonicLibrarySystem-frontend/dashboard" element={ <Dashboard/> } />
              <Route exact path="/sonicLibrarySystem-frontend/sector1" element={ <Sector1/> } />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
