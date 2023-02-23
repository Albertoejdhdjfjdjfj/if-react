import {
  CHANGE_FILTER_ADULTS,
  CHANGE_FILTER_ROOMS,
  CHANGE_FILTER_CHILDREN,
  CHANGE_DISTINATION,
  REQUEST_HOTELS,
  REQUEST_HOTELS_ERROR,
  REQUEST_HOTELS_SUCCESS,
  FETCH_HOTELS,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  CHANGE_CHILD_YEAR
} from './actionsTypes';

import { createAction } from 'redux-actions';

export const changeFilterAdults = createAction(CHANGE_FILTER_ADULTS);

export const changeFilterRooms = createAction(CHANGE_FILTER_ROOMS);

export const changeFilterChildren = createAction(CHANGE_FILTER_CHILDREN);

export const changeChildrenYear = createAction(CHANGE_CHILD_YEAR);

export const changeDistination = createAction(CHANGE_DISTINATION);

export const changeDateFrom = createAction(CHANGE_DATE_FROM);

export const changeDateTo = createAction(CHANGE_DATE_TO);

export const requestHotels = createAction(REQUEST_HOTELS);

export const requestHotelsError = createAction(REQUEST_HOTELS_ERROR);

export const requestHotelsSuccess = createAction(REQUEST_HOTELS_SUCCESS);

export const fetchHotels = createAction(FETCH_HOTELS);
