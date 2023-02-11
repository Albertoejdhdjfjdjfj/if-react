import {
  CHANGE_FILTER_ADULTS,
  CHANGE_FILTER_ROOMS,
  CHANGE_FILTER_CHILDREN,
  CHANGE_DISTINATION,
  CHANGE_DATE_FROM,
  CHANGE_DATE_TO,
  REQUEST_HOTELS,
  REQUEST_HOTELS_ERROR,
  REQUEST_HOTELS_SUCCESS,
  CHANGE_CHILD_YEAR
} from '../actions/actionsTypes';

const initialState = {
  dist: '',
  adults: 0,
  children: 0,
  rooms: 0,
  childYears: '',
  dateFrom: new Date().getTime(),
  dateTo: new Date().getTime(),
  loading: false,
  error: false,
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

    case CHANGE_CHILD_YEAR:
      return {
        ...state,
        childYears: action.payload
      };

    case CHANGE_DISTINATION:
      return {
        ...state,
        dist: action.payload
      };

    case CHANGE_DATE_FROM:
      return {
        ...state,
        dateFrom: action.payload
      };

    case CHANGE_DATE_TO:
      return {
        ...state,
        dateTo: action.payload
      };

    case REQUEST_HOTELS:
      return {
        ...state,
        loading: true,
        error: false
      };

    case REQUEST_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        sliderData: action.payload
      };

    case REQUEST_HOTELS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
}

export default Reducer;
