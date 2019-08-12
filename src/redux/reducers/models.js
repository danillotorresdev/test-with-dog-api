
import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isLoading: false,
  isSaving: false,
  error: false,
  errorMessage: '',
  modelsData: [],
  brandCode: '',
  vehicleCode: '',
  modelCode: 0,
};


export const getModelsRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const getModelsSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    modelsData: action.models,
  };
};

export const getModelsFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false,
  };
};

export const saveModelCodeSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSaving: false,
    modelCode: action.modelCode.modelCode,
    saved: true,
  };
};

export const receiveBrandCode = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    brandCode: action.brandCode.brandCode,
  };
};

export const HANDLERS = {
  [Types.GET_MODELS_REQUEST]: getModelsRequest,
  [Types.GET_MODELS_SUCCESS]: getModelsSuccess,
  [Types.GET_MODELS_FAILURE]: getModelsFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
