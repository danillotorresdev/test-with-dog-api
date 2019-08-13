import { combineReducers } from 'redux';
import breeds from './breeds';
import imageBreed from './imageBreed';

const rootReducer = combineReducers({
  breeds,
  imageBreed,
});

export default rootReducer;
