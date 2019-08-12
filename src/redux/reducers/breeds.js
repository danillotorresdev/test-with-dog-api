import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  breedSelected: '',
};

export const getBreedsRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const getBreedsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.breeds,
  };
};

export const getBreedsFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false,
  };
};

export const saveBreedSelectedSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    breedSelected: action.breedSelected.breedSelected,
  };
};

export const HANDLERS = {
  [Types.GET_BREEDS_REQUEST]: getBreedsRequest,
  [Types.GET_BREEDS_SUCCESS]: getBreedsSuccess,
  [Types.GET_BREEDS_FAILURE]: getBreedsFailure,
  [Types.SAVE_BREED_SELECTED_SUCCESS]: saveBreedSelectedSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS);
