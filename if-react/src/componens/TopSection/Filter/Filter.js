import React, { useEffect, useState } from 'react';
import './Filter.css';

const Filter = ({ onChange }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(0);

  const handleFilterChange = (data) => {
    onChange(data);
  };

  const handleClickButtonMinusAdults = () => {
    adults - 1 < 0 ? setAdults(0) : setAdults(adults - 1);
  };

  const handleClickButtonPlusAdults = () => {
    adults + 1 > 30 ? setAdults(30) : setAdults(adults + 1);
  };

  const handleClickButtonMinusChildren = () => {
    children - 1 < 0 ? setChildren(0) : (setChildren(children - 1), deleteSelect());
  };

  const handleClickButtonPlusChildren = () => {
    children + 1 > 10 ? setChildren(10) : (setChildren(children + 1), addSelect());
  };

  const handleClickButtonMinusRooms = () => {
    rooms - 1 < 0 ? setRooms(0) : setRooms(rooms - 1);
  };

  const handleClickButtonPlusRooms = () => {
    rooms + 1 > 30 ? setRooms(30) : setRooms(rooms + 1);
  };

  useEffect(() => {
    handleFilterChange({
      adults: adults,
      children: children,
      rooms: rooms
    });
  }, [adults, rooms, children]);

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

function deleteAllSelect() {
  let selects = document.getElementById('selectBox');
  while (selects.firstChild) {
    selects.removeChild(selects.firstChild);
  }
}
export default Filter;
