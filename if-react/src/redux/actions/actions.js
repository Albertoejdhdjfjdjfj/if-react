import { CHANGE_FILTER, CHANGE_DISTINATION, CHANGE_SLIDER_DATA } from './actionsTypes';

export function changeFilter(obj) {
  return {
    type: CHANGE_FILTER,
    payload: {
      adults: obj.adults,
      children: obj.children,
      rooms: obj.rooms
    }
  };
}

export function changeDistination(text) {
  return {
    type: CHANGE_DISTINATION,
    payload: text
  };
}

export function changeData(array) {
  return {
    type: CHANGE_SLIDER_DATA,
    payload: array
  };
}
