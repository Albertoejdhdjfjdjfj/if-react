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
      </div>
    </div>
  );
};

export default TopSection;
