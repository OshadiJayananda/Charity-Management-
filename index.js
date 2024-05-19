import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import AddVolunteer from './Components/AddVolunteer';
import Career from './Components/Career';
import Internship from './Components/Internship';
import Job from './Components/Job';
import AllVolunteers from './Components/AllVolunteers';
import UpdateVolunteer from './Components/UpdateVolunteer';
import VolunteerDetails from './Components/VolunteerDetails';
// import Volunteer from './Components/Volunteer';
import ManagersCareer from './Components/ManagersCareer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}   />
      <Route path='/Career' element={<Career/>}   />
      <Route path='/AddVolunteer' element={<AddVolunteer/>}   />
      <Route path='/Internship' element={<Internship/>}   />
      <Route path='/Job' element={<Job/>}   />
      <Route path="/UpdateVolunteer/:nid" element={<UpdateVolunteer/>} />
      <Route path='/VolunteerDetails/:nid' element={<VolunteerDetails/>} />
      <Route path='/AllVolunteers' element={<AllVolunteers/>} />
      <Route path='/ManagersCareer' element={<ManagersCareer/>} />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
