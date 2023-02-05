import { CHANGE_FILTER, CHANGE_DISTINATION, CHANGE_SLIDER_DATA } from '../actions/actionsTypes';

const initialState = {
  dist: '',
  filter: {
    adults: 0,
    children: 0,
    rooms: 0
  },
  sliderData: false
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: {
          adults: action.payload.adults,
          children: action.payload.children,
          rooms: action.payload.rooms
        }
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
