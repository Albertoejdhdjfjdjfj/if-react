import { useSelector, useDispatch } from 'react-redux';
import React, { useRef, useCallback } from 'react';
import {
  changeFilterAdults,
  changeFilterRooms,
  changeFilterChildren,
  changeChildrenYear
} from '../../../redux/actions/actions';
import { addSelect, deleteAllSelects, deleteSelect } from './HelperFunctions';
import './Filter.css';

const Filter = React.memo(({ display }) => {
  const adults = useSelector((state) => state.adults);
  const rooms = useSelector((state) => state.rooms);
  const children = useSelector((state) => state.children);
  const selectsRef = useRef();

  const dispatch = useDispatch();

  const handleClickButtonMinusAdults = useCallback(() => {
    adults - 1 < 0 ? dispatch(changeFilterAdults(0)) : dispatch(changeFilterAdults(adults - 1));
    adults - 1 === 0 ? (dispatch(changeFilterChildren(0)), deleteAllSelects()) : '';
  });

  const handleClickButtonPlusAdults = useCallback(() => {
    adults + 1 > 30 ? dispatch(changeFilterAdults(30)) : dispatch(changeFilterAdults(adults + 1));
  });

  const handleClickButtonMinusChildren = useCallback(() => {
    children - 1 < 0
      ? dispatch(changeFilterChildren(0))
      : (dispatch(changeFilterChildren(children - 1)), deleteSelect());
  });

  const handleClickButtonPlusChildren = useCallback(() => {
    adults === 0
      ? ''
      : children + 1 > 10
      ? dispatch(changeFilterChildren(10))
      : (dispatch(changeFilterChildren(children + 1)), addSelect());
  });

  const handleClickButtonMinusRooms = useCallback(() => {
    rooms - 1 < 0 ? dispatch(changeFilterRooms(0)) : dispatch(changeFilterRooms(rooms - 1));
  });

  const handleClickButtonPlusRooms = useCallback(() => {
    rooms + 1 > 30 ? dispatch(changeFilterRooms(30)) : dispatch(changeFilterRooms(rooms + 1));
  });

  const childrenYears = useCallback(() => {
    const selects = selectsRef.current.children;
    let str = '';

    for (let i = 0; i < selects.length; i++) {
      str += `${selects[i].value.slice(0, -10)}`;
      if (selects[i] != selects[selects.length - 1]) {
        str += ',';
      }
    }

    dispatch(changeChildrenYear(str));
  });

  return (
    <div className="filterBody" id="filterBody" style={{ display: `${display ? 'flex' : 'none'}` }}>
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
            <button
              onClick={() => {
                handleClickButtonMinusChildren(), childrenYears();
              }}
            >
              -
            </button>
            <p>{children}</p>
            <button
              onClick={() => {
                handleClickButtonPlusChildren(), childrenYears();
              }}
            >
              +
            </button>
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

      <div className="selectsOfChildren" style={{ display: children > 0 ? 'flex' : 'none' }}>
        <p>What is the age of the child you’re travelling with?</p>

        <div ref={selectsRef} id="selectBox" onClick={childrenYears}></div>
      </div>
    </div>
  );
});

export default Filter;
