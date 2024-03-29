import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  changeFilterAdults,
  changeFilterRooms,
  changeFilterChildren
} from '../../../redux/actions/actions';
import './Filter.css';

const Filter = () => {
  const adults = useSelector((state) => state.adults);
  const rooms = useSelector((state) => state.rooms);
  const children = useSelector((state) => state.children);

  const dispatch = useDispatch();

  const handleClickButtonMinusAdults = () => {
    adults - 1 < 0 ? dispatch(changeFilterAdults(0)) : dispatch(changeFilterAdults(adults - 1));
  };

  const handleClickButtonPlusAdults = () => {
    adults + 1 > 30 ? dispatch(changeFilterAdults(30)) : dispatch(changeFilterAdults(adults + 1));
  };

  const handleClickButtonMinusChildren = () => {
    children - 1 < 0
      ? dispatch(changeFilterChildren(0))
      : (dispatch(changeFilterChildren(children - 1)), deleteSelect());
  };

  const handleClickButtonPlusChildren = () => {
    children + 1 > 10
      ? dispatch(changeFilterChildren(10))
      : (dispatch(changeFilterChildren(children + 1)), addSelect());
  };

  const handleClickButtonMinusRooms = () => {
    rooms - 1 < 0 ? dispatch(changeFilterRooms(0)) : dispatch(changeFilterRooms(rooms - 1));
  };

  const handleClickButtonPlusRooms = () => {
    rooms + 1 > 30 ? dispatch(changeFilterRooms(30)) : dispatch(changeFilterRooms(rooms + 1));
  };

  return (
    <div className="filterBody" id="filterBody">
      <div className="wrapperOfFilter">
        <div>
          <p>Adults</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusAdults}>-</button>
            <p>{adults}</p>
            <button onClick={handleClickButtonPlusAdults}>+</button>
          </div>
        </div>
        <div>
          <p>Children</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusChildren}>-</button>
            <p>{children}</p>
            <button onClick={handleClickButtonPlusChildren}>+</button>
          </div>
        </div>
        <div>
          <p>Rooms</p>{' '}
          <div>
            <button onClick={handleClickButtonMinusRooms}>-</button>
            <p>{rooms}</p>
            <button onClick={handleClickButtonPlusRooms}>+</button>
          </div>
        </div>
      </div>

      <div className="selectsOfChildren" id={children > 0 ? 'flex' : 'none'}>
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
