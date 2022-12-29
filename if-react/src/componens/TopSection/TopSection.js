import React from 'react';
import { useState } from 'react';
import HomesGuestloves from '../HomesGuestLoves/HomesGuestLoves';
import './TopSection.css';
import logo from '../../assets/svg/logo.svg';
import night from '../../assets/svg/Night.svg';
import account from '../../assets/svg/AccountCircle.svg';
import googlePlay from '../../assets/svg/google-play-badge.svg';
import appStore from '../../assets/svg/App_Store.svg';
import background from '../../assets/images/castelmezzano.jpg';

const TopSection = () => {
  const [city, setCity] = useState('');
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
            onChange={(e) => {
              setCity(e.target.value);
            }}
            class="city_input"
            placeholder="NewYork"
            type="search"
          />
          <div className="date_input">
            <div>Check-in</div>
            <div>-</div>
            <div>Check-out</div>
          </div>
          <div class="num_people_input">0 Adults — 0 Children — 0Room</div>
          <div className="searchButton">Search</div>
        </form>

        <div class="wrapper_apps">
          <img src={`${googlePlay}`} />
          <img src={`${appStore}`} />
        </div>
      </div>

      <HomesGuestloves city={city} />
    </div>
  );
};

export default TopSection;
