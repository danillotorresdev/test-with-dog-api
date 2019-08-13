import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  imageBreed: [],
  breedSelected: '',
};

export const getImageBreedsRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const getImageBreedsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    imageBreed: action.imageBreed,
  };
};

export const getImageBreedsFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false,
  };
};

export const HANDLERS = {
  [Types.GET_IMAGE_BREED_REQUEST]: getImageBreedsRequest,
  [Types.GET_IMAGE_BREED_SUCCESS]: getImageBreedsSuccess,
  [Types.GET_IMAGE_BREED_FAILURE]: getImageBreedsFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
