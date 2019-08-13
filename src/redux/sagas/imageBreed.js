import axios from 'axios';
import { put, select } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';
import { baseUrl } from '../../service/API';

export function* getImageBreeds() {
  const state = yield select();
  const { breedSelected } = state.breeds;
  const breeds = yield axios.get(`${baseUrl}/breed/${breedSelected}/images/random`);
  yield put(ActionCreators.getImageBreedSuccess(breeds.data));
}
