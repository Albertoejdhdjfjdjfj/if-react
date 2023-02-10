import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_HOTELS } from '../actions/actionsTypes';
import { requestHotels, requestHotelsError, requestHotelsSuccess } from '../actions/actions';

export function* watchRequestHotels() {
  yield takeEvery(FETCH_HOTELS, fetchHotels);
}

export function* fetchHotels(action) {
  try {
    yield put(requestHotels);
    const data = yield call(() => {
      return fetch(
        `https://if-student-api.onrender.com/api/hotels?search=${action.payload.dist}&dateFrom=${action.payload.dateFrom}&dateTo=${action.payload.dateTo}&adults=${action.payload.adults}&children=${action.payload.children}&rooms=${action.payload.rooms}`
      ).then((res) => res.json());
    });

    yield put(requestHotelsSuccess(data))
  } catch(error) {
     yield put(requestHotelsError());
  }
}
