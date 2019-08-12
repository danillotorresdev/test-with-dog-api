import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getBreedsRequest: null,
  getBreedsSuccess: ['breeds'],
  getBreedsFailure: null,

  saveBreedSelectedSuccess: ['breedSelected'],

  getModelsRequest: null,
  getModelsSuccess: ['models'],
  getModelsFailure: null,
  saveModelCodeSuccess: ['brandCode'],

  getVersionRequest: null,
  getVersionSuccess: ['versions'],
  getVersionFailure: null,
});

export default Creators;
