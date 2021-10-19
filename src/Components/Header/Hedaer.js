
import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from "../../images/pp-removebg-preview.png"
import '../Header/Header.css'

const Hedaer = () => {
  const{user,logOut}=useAuth()
    const  activeStyle={
        fontWeight: "bold",
        color: "grey"
      }
    
    return (
        <div className="col-12 header nav-itmes ">
            
               
                     <img className="logo mx-auto me-5 pe-5" src={logo} alt=""/>
                  
                
            
                <NavLink to="/home" activeStyle={activeStyle} className="nav-item me-3 ">Home</NavLink>
                <NavLink to="about" activeStyle={activeStyle}  className="nav-item me-3">About Us</NavLink>
                <NavLink to="/service" activeStyle={activeStyle}  className="nav-item me-3">Services</NavLink>
                <NavLink to="/doctors"  className="nav-item me-3">Doctors</NavLink>
                <NavLink to="/appointment"  className="nav-item me-3">Appointment</NavLink>
                <NavLink to="/contact"  className="nav-item me-3">Contact</NavLink> 
                 <NavLink to="/login"  className="nav-item me-3 ps-3">Login</NavLink>
                 <span>{user.displayName}</span>
                
                 {
                   user.email && <Button variant="secondary" className="ms-5" onClick={logOut}>Logout</Button>
                 }
                 
              </div>
      

    );
};

export default Hedaer;