import React from 'react';
import BannerImage from '../images/img12.jpg';
import '../styles/home.css';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div className='home' style= {{backgroundImage:`url(${BannerImage})`}}>
            <div className='headerContainer' >
                
                <h1> Lorem ipsum dolor</h1>
                <p>Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit. </p>
                <Link to="/service">
          <button> TRY NOW </button>
        </Link>
                </div>
        </div>
    );
}

export default Home
