import { combineReducers } from 'redux';
import breeds from './breeds';
import imageBreed from './imageBreed';
import models from './models';

const rootReducer = combineReducers({
  breeds,
  imageBreed,
  models,
});

export default rootReducer;
