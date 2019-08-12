import axios from 'axios';
import { put } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';

export function* getBreeds() {
  const breeds = yield axios.get('https://dog.ceo/api/breeds/list/all');
  console.log(breeds)
  yield put(ActionCreators.getBreedsSuccess(breeds.data));
}
