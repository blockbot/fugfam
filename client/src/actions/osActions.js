import { LOAD_APP, GET_IMAGE_COLLECTION } from '../constants/actionTypes.js';

export const loadApp = app => ({
  type: LOAD_APP,
  app: app
})

export const getImageCollection = collection => ({
  type: GET_IMAGE_COLLECTION,
  collection: collection
})
