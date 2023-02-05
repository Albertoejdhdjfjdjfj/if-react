import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { changeFilter } from '../../../redux/actions/actions';
import './Filter.css';

const Filter = () => {
  const filterData = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleClickButtonMinusAdults = () => {
    filterData.adults - 1 < 0
      ? dispatch(
          changeFilter({ adults: 0, children: filterData.children, rooms: filterData.rooms })
        )
      : dispatch(
          changeFilter({
            adults: filterData.adults - 1,
            children: filterData.children,
            rooms: filterData.rooms
          })
        );
  };

  const handleClickButtonPlusAdults = () => {
    filterData.adults + 1 > 30
      ? dispatch(
          changeFilter({ adults: 30, children: filterData.children, rooms: filterData.rooms })
        )
      : dispatch(
          changeFilter({
            adults: filterData.adults + 1,
            children: filterData.children,
            rooms: filterData.rooms
          })
        );
  };

  const handleClickButtonMinusChildren = () => {
    filterData.children - 1 < 0
      ? dispatch(changeFilter({ adults: filterData.adults, children: 0, rooms: filterData.rooms }))
      : (dispatch(
          changeFilter({
            adults: filterData.adults,
            children: filterData.children - 1,
            rooms: filterData.rooms
          })
        ),
        deleteSelect());
  };

  const handleClickButtonPlusChildren = () => {
    filterData.children + 1 > 10
      ? dispatch(changeFilter({ adults: filterData.adults, children: 10, rooms: filterData.rooms }))
      : (dispatch(
          changeFilter({
            adults: filterData.adults,
            children: filterData.children + 1,
            rooms: filterData.rooms
          })
        ),
        addSelect());
  };

  const handleClickButtonMinusRooms = () => {
    filterData.rooms - 1 < 0
      ? dispatch(
          changeFilter({ adults: filterData.adults, children: filterData.children, rooms: 0 })
        )
      : dispatch(
          changeFilter({
            adults: filterData.adults,
            children: filterData.children,
            rooms: filterData.rooms - 1
          })
        );
  };

  const handleClickButtonPlusRooms = () => {
    filterData.rooms + 1 > 30
      ? dispatch(
          changeFilter({ adults: filterData.adults, children: filterData.children, rooms: 30 })
        )
      : dispatch(
          changeFilter({
            adults: filterData.adults,
            children: filterData.children,
            rooms: filterData.rooms + 1
          })
        );
  };

  return (
    <div className="filterBody" id="filterBody">
      <div className="wrapperOfFilter">
        <div>
          <p>Adults</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusAdults}>-</button>
            <p>{filterData.adults}</p>
            <button onClick={handleClickButtonPlusAdults}>+</button>
          </div>
        </div>
        <div>
          <p>Children</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusChildren}>-</button>
            <p>{filterData.children}</p>
            <button onClick={handleClickButtonPlusChildren}>+</button>
          </div>
        </div>
        <div>
          <p>Rooms</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusRooms}>-</button>
            <p>{filterData.rooms}</p>
            <button onClick={handleClickButtonPlusRooms}>+</button>
          </div>
        </div>
      </div>

      <div className="selectsOfChildren" id={filterData.children > 0 ? 'flex' : 'none'}>
        <p>What is the age of the child you’re travelling with?</p>

        <div id="selectBox"></div>
      </div>
    </div>
  );
};

function addSelect() {
  let selects = document.getElementById('selectBox');
  let select = document.createElement('select');
  select.innerHTML = ` 
     <option selected>0 years old</option>
     <option>1 years old</option>
     <option>2 years old</option>
     <option>3 years old</option>
     <option>4 years old</option>
     <option>5 yeaption>
     <option>6 years old</option>
     <option>7 years old</option>
     <option>8 years old</option>
     <option>9 years old</option>
     <option>10 years old</option>
     <option>11 years old</option>
     <option>12 years old</option>
     <option>13 years old</option>
     <option>14 years old</option>
     <option>15 years old</option>
     <option>16 years old</option>
     <option>17 years old</option>
      `;
  selects.appendChild(select);
}

function deleteSelect() {
  let selects = document.getElementById('selectBox');
  selects.removeChild(selects.lastChild);
}

export default Filter;
