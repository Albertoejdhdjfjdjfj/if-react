import {
  CHANGE_FILTER_ADULTS,
  CHANGE_FILTER_ROOMS,
  CHANGE_FILTER_CHILDREN,
  CHANGE_DISTINATION,
  CHANGE_SLIDER_DATA
} from './actionsTypes';
import { createAction } from 'redux-actions';

export const changeFilterAdults = createAction(CHANGE_FILTER_ADULTS);

export const changeFilterRooms = createAction(CHANGE_FILTER_ROOMS);

export const changeFilterChildren = createAction(CHANGE_FILTER_CHILDREN);

export const changeDistination = createAction(CHANGE_DISTINATION);

export const changeData = createAction(CHANGE_SLIDER_DATA);
