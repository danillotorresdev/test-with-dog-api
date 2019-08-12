import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getBreedsRequest: null,
  getBreedsSuccess: ['breeds'],
  getBreedsFailure: null,

  saveBreedSelectedSuccess: ['breedSelected'],

  getImageBreedRequest: null,
  getImageBreedSuccess: ['imageBreed'],
  getImageBreedFailure: null,

  getModelsRequest: null,
  getModelsSuccess: ['models'],
  getModelsFailure: null,
  saveModelCodeSuccess: ['brandCode'],

  getVersionRequest: null,
  getVersionSuccess: ['versions'],
  getVersionFailure: null,
});

export default Creators;
