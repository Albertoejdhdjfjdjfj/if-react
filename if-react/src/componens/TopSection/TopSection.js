import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeDistination } from '../../redux/actions/actions';
import { fetchHotels } from '../../redux/actions/actions';
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

const TopSection = () => {
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [popUpButtonSignOutDisplay, setPopUpButtonSignOutDisplay] = useState(false);

  const dist = useSelector((state) => state.dist);
  const dateFrom = useSelector((state) => state.dateFrom);
  const dateTo = useSelector((state) => state.dateTo);
  const adults = useSelector((state) => state.adults);
  const rooms = useSelector((state) => state.rooms);
  const children = useSelector((state) => state.children);
  const childYears = useSelector((state) => state.childYears);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchHotels({
        dist: dist,
        adults: adults,
        childYears: childYears,
        rooms: rooms,
        dateFrom: dateFrom,
        dateTo: dateTo
      })
    );
  }, []);

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

              <img
                src={`${account}`}
                onClick={() => setPopUpButtonSignOutDisplay(!popUpButtonSignOutDisplay)}
                style={{
                  filter: popUpButtonSignOutDisplay
                    ? 'brightness(0) saturate(100%) invert(88%) sepia(82%) saturate(6390%) hue-rotate(322deg) brightness(100%) contrast(92%)'
                    : 'none'
                }}
              />
            </div>
          </nav>
        </header>

        <SignOut display={popUpButtonSignOutDisplay} />

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
            onChange={(e) => dispatch(changeDistination(e.target.value))}
            placeholder="NewYork"
            type="search"
          />

          <Calendar />

          <div className="num_people_input" onClick={() => setFilterDisplay(!filterDisplay)}>
            {adults} Adults — {children} Children — {rooms} Room
          </div>

          <div
            className="searchButton"
            onClick={() =>
              dispatch(
                fetchHotels({
                  dist: dist,
                  adults: adults,
                  childYears: childYears,
                  rooms: rooms,
                  dateFrom: dateFrom,
                  dateTo: dateTo
                })
              )
            }
          >
            Search
          </div>
        </form>

        <Filter display={filterDisplay} />

        <div className="wrapper_apps">
          <img src={`${googlePlay}`} />
          <img src={`${appStore}`} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
