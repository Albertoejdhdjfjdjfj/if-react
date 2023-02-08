import {
  CHANGE_FILTER_ADULTS,
  CHANGE_FILTER_ROOMS,
  CHANGE_FILTER_CHILDREN,
  CHANGE_DISTINATION,
  CHANGE_SLIDER_DATA
} from '../actions/actionsTypes';

const initialState = {
  dist: '',
  adults: 0,
  children: 0,
  rooms: 0,
  sliderData: false
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_ADULTS:
      return {
        ...state,
        adults: action.payload
      };

    case CHANGE_FILTER_ROOMS:
      return {
        ...state,
        rooms: action.payload
      };

    case CHANGE_FILTER_CHILDREN:
      return {
        ...state,
        children: action.payload
      };
    case CHANGE_DISTINATION:
      return {
        ...state,
        dist: action.payload
      };

    case CHANGE_SLIDER_DATA:
      return {
        ...state,
        sliderData: action.payload
      };

    default:
      return state;
  }
}

export default Reducer;
