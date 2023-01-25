import React from 'react';
import { useState, useEffect } from 'react';
import HomesGuestloves from '../HomesGuestLoves/HomesGuestLoves';
import './TopSection.css';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';
import googlePlay from '../../assets/svg/google-play-badge.svg';
import appStore from '../../assets/svg/App_Store.svg';
import background from '../../assets/images/castelmezzano.jpg';
import Calendar from './Calendar/Calendar';
import Filter from './Filter/Filter';

const TopSection = ({ onChange }) => {
  const [text, setText] = useState('');
  const [filterDisplay, setFilterDisplay] = useState(true);
  const [filterData, setFilterData] = useState({
    adults: 0,
    children: 0,
    rooms: 0
  });

  const handleFilterDataChange = (data) => {
    setFilterData(data);
  };

  const handleDistChange = () => {
    onChange(text);
  };

  const handleFilterDisplay = () => {
    setFilterDisplay(!filterDisplay);
    let filter = document.getElementById('filterBody');
    filterDisplay ? (filter.style.display = 'flex') : (filter.style.display = 'none');
  };

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

        <h1>
          Discover stays
          <br />
          to live,work or just relax
        </h1>

        <div className="label_form">
          <p>Your destination or hotel name</p>
          <p>Check-in — Check-out</p>
          <p></p>
        </div>

        <form>
          <input
            id="city_input"
            onChange={(e) => setText(e.target.value)}
            placeholder="NewYork"
            type="search"
          />
          <Calendar />
          <div className="num_people_input" onClick={handleFilterDisplay}>
            {filterData.adults} Adults — {filterData.children} Children — {filterData.rooms} Room
          </div>
          <div className="searchButton" onClick={handleDistChange}>
            Search
          </div>
        </form>
        <Filter onChange={handleFilterDataChange} />
        <div className="wrapper_apps">
          <img src={`${googlePlay}`} />
          <img src={`${appStore}`} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
