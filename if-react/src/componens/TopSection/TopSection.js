import React from 'react';
import { useState } from 'react';
import './TopSection.css';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';
import googlePlay from '../../assets/svg/google-play-badge.svg';
import appStore from '../../assets/svg/App_Store.svg';
import background from '../../assets/images/castelmezzano.jpg';
import Calendar from './Calendar/Calendar';
import Filter from './Filter/Filter';
import SignOut from './SignOut/SignOut';

const TopSection = ({ onChange }) => {
  const [text, setText] = useState('');
  const [filterDisplay, setFilterDisplay] = useState(true);
  const [popUpButtonSignOutDisplay, setPopUpButtonSignOutDisplay] = useState('false');
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

  const handlePopUpButtonSignOutDisplay = (e) => {
    popUpButtonSignOutDisplay
      ? (e.target.style.filter =
          'brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(6390%) hue-rotate(322deg) brightness(100%) contrast(92%)')
      : (e.target.style.filter = 'none');
    setPopUpButtonSignOutDisplay(!popUpButtonSignOutDisplay);
    let button = document.getElementById('signOut');
    popUpButtonSignOutDisplay ? (button.style.display = 'flex') : (button.style.display = 'none');
  };

  return (
    <div>
      <div className="top_section" style={{ backgroundImage: `url(${background})` }}>
        <header>
          <img src={`${logo}`} />
          <nav>
            <div className="word_interface">
              <p>Stays</p>
              <p>Attractions</p>
            </div>
            <div className="svg_interface">
              <img src={`${night}`} />
              <img src={`${account}`} onClick={handlePopUpButtonSignOutDisplay} />
            </div>
          </nav>
        </header>

        <SignOut />

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
