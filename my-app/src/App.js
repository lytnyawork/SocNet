import React from 'react';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      
        <div className="app-wrapper">
          < Header/> 
          < NavBar/>
          <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile}/>
            <Route path='/dialogs/*' Component={Dialogs}/>           
          </Routes>
          </div>     
        </div>
      
    </BrowserRouter>
  );
}

export default App;
