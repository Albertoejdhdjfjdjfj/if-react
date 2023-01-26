import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Hotel.css';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';
import Footer from '../Footer/Footer';

const Hotel = () => {
  const { id } = useParams();
  const [data, setData] = useState(false);

  useEffect(() => {
    fetch(`https://if-student-api.onrender.com/api/hotels/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    console.log(data);
  }, []);

  if (data) {
    return (
      <div>
        <div className="top_section" style={{ backgroundImage: `url(${data.imageUrl})` }}>
          <header style={{ backgroundColor: `rgb(84, 78, 78)`, borderRadius: '8px' }}>
            <img src={`${logo}`} />
            <nav>
              <div className="word_interface">
                <p>Stays</p>
                <p>Attractions</p>
              </div>
              <div className="svg_interface">
                <img src={`${night}`} />
                <img src={`${account}`} />
              </div>
            </nav>
          </header>
        </div>
        <div className="description">
          <h2>About Hotel</h2>
          <p>Hotel name: {data.name}</p>
          <p>
            City: {data.city},{data.country}
          </p>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Hotel;
