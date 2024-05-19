import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import App from './App';
import Career from './Components/Career';
import ApplyVolunteer from './Components/ApplyVolunteer';
import Internship from './Components/Internship';
import Job from './Components/Job';
import Profile from './Components/profile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}   />
      <Route path='/Career' element={<Career/>}   />
      <Route path='/ApplyVolunteer' element={<ApplyVolunteer/>} />
      <Route path='/Internship' element={<Internship/>}   />
      <Route path='/Job' element={<Job/>}   />
      <Route path='/Profile/:nid' element={<Profile/>}   />
    </Routes>
  </BrowserRouter>
);



