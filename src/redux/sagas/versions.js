import axios from 'axios';
import { put, select } from 'redux-saga/effects';
import ActionCreators from '../actionCreators';

// eslint-disable-next-line import/prefer-default-export
export function* getVersions(action) {
  const state = yield select();
  const brand = state.brands.brandCode;

  const models = yield axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${brand}`);
  yield put(ActionCreators.getModelsSuccess(models.data));
}
