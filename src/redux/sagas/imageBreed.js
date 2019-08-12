import axios from 'axios';
import { put } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';
import { baseUrl } from '../../service/API';

export function* getBreeds() {
  const breeds = yield axios.get(`${baseUrl}/${breedSelected}/images/random`);
  yield put(ActionCreators.getBreedsSuccess(breeds.data));
}
