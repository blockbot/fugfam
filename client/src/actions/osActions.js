import { LOAD_APP, REQUEST_IMAGE_COLLECTION, RECEIVE_IMAGE_COLLECTION } from '../constants/actionTypes.js'
import fetch from 'cross-fetch'

export const loadApp = app => ({
  type: LOAD_APP,
  app
})

export const requestImageCollection = collection => ({
  type: REQUEST_IMAGE_COLLECTION,
  collection
})

export const receiveImageCollection = (collection, json) => ({
  type: RECEIVE_IMAGE_COLLECTION,
  collection,
  images: json.data.map(image => image)
})

export function fetchImageCollection(collection) {
  return dispatch => {
    dispatch(requestImageCollection(collection))
    return fetch(`${window.location.origin}/images?bucket=${collection}`)
      .then(response => response.json())
      .then(json => dispatch(receiveImageCollection(collection, json)))
  }
}
