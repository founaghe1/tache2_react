import React from 'react';
import { Link } from 'react-router-dom';
import page404 from '../assets/images/page404.png';
const NotFoundPage = () => {
    
        return <div>
            <img src={page404} style={{width:"100%", height: "350px"}} />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    
}
export default NotFoundPage;