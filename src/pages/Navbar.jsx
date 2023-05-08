import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Navbar.css';

export const Navbar = () =>{
    return(
        <div>
            <div className=' myNav  '>
              <Link to='/' className='text-decoration-none fw-bold text-light'>Home</Link>
              <Link to='/menu' className='mx-5 text-decoration-none fw-bold text-light'>Profil</Link>
              <Link to='/contact' className='text-decoration-none fw-bold text-light'>Contact</Link>
              <Link to='/changeProfile' className="ms-5 ps-5">
                <Button className="decrem mt-4 ">Change Username</Button>
              </Link>
            </div>
        </div>
    )
}