import React from "react";
import { Link } from "react-router-dom";
import './Navbars.css';

export const Navbars = () =>{
    return(
        <div>
            <div className=' myNav py-4 '>
              <Link to='/' className='text-decoration-none fw-bold text-light'>Homes</Link>
              <Link to='/contacts' className='mx-5 text-decoration-none fw-bold text-light'>Contacts</Link>
              <Link to='/login' className='mx-5 text-decoration-none fw-bold text-light'>Login</Link>
            </div>
        </div>
    )
}