import React from 'react';
import { useState,useParams,useEffect } from 'react';
import './TopSection.css';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';
import background from '../../assets/images/castelmezzano.jpg';

const Hotel = ({ onChange }) => {
const id=useParams();
useEffect(() => {
   
}, []);

 return (
    <div>
      <div className="top_section" style={{ backgroundImage: `url(${background})` }}>
        <header>
          <img src={`${logo}`} />
          <nav>
            <div className="word_interface">
              <a>Stays</a>
              <a>Attractions</a>
            </div>
            <div className="svg_interface">
              <img src={`${night}`} />
              <img src={`${account}`} />
            </div>
          </nav>
        </header>
      </div>
      <div className='hotelSection'>
         <img src=''/>
      </div>
    </div>
  );
};

export default Hotel;
