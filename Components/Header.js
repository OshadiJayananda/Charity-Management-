import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid"> {/* Add container-fluid class */}
        <a className="navbar-brand" >DoNation</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> {/* Change data-toggle to data-bs-toggle and data-target to data-bs-target */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Create</a> {/* Change data-toggle to data-bs-toggle */}
              <ul className="dropdown-menu">
                <li><NavLink to="/AddVolunteer" className="nav-link" activeClassName="active">Volunteers</NavLink></li>
                <li><NavLink to="/Job" className="nav-link" activeClassName="active">Employees</NavLink></li>
                <li><NavLink to="/Internship" className="nav-link" activeClassName="active">Internships</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink to="/AllVolunteers" className="nav-link" activeClassName="active">Volunteers</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/disabled" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Employees</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/disabled" className="nav-link disabled" tabIndex="-1" aria-disabled="true">Internships</NavLink>
          </li>

          </ul>
          
        </div>
      </div> {/* Close the container-fluid div */}
    </nav>
  
  );
}

export default Header;
