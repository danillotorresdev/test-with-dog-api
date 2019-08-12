import { takeLatest, all } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import { getBreeds } from './breeds';

export default function* rootSaga() {
  yield all([
    takeLatest(Types.GET_BREEDS_REQUEST, getBreeds),
  ]);
}
