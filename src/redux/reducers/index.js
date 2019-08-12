import { combineReducers } from 'redux';
import breeds from './breeds';
import models from './models';

const rootReducer = combineReducers({
  breeds,
  models,
});

export default rootReducer;
