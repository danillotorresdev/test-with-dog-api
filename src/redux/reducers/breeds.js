import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getBreedsRequest: null,
  getBreedsSuccess: ['breeds'],
  getBreedsFailure: null,
  saveBreedSelectedSuccess: ['breedSelected'],
});

export const INITIAL_STATE = {
  isLoading: false,
  data: [],
  breedSelected: '',
};

/**
 * Handles
 */
export const getBreedsRequest = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: true,
});

export const getBreedsSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLoading: false,
  data: action.breeds,
});

export const getBreedsFailure = (state = INITIAL_STATE) => ({
  ...state,
  isLoading: false,
});

export const saveBreedSelectedSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  breedSelected: action.breedSelected.breedSelected,
});

/**
 * Reducer
 */
export const HANDLERS = {
  [Types.GET_BREEDS_REQUEST]: getBreedsRequest,
  [Types.GET_BREEDS_SUCCESS]: getBreedsSuccess,
  [Types.GET_BREEDS_FAILURE]: getBreedsFailure,
  [Types.SAVE_BREED_SELECTED_SUCCESS]: saveBreedSelectedSuccess,
};

export default createReducer(INITIAL_STATE, HANDLERS);
