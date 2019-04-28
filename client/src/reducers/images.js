import "@babel/polyfill";

const initialState = {
  isFetching: false,
  // didInvalidate: false,
  // lastUpdated: 6969696969,
  // fetchedPageCount: 69,
  // nextPageUrl: ?p=69,
  activeCollection: 'fug-images-paintings',
  collections: {},
}

function imageCollection(state, action) {
  switch(action.type) {
    case 'REQUEST_IMAGE_COLLECTION':
      return Object.assign({}, state, {
        activeCollection: action.collection,
        isFetching: true,
      })
    case 'RECEIVE_IMAGE_COLLECTION':
      return Object.assign({}, state, {
        isFetching: false,
        collections: Object.assign({}, state.collections, {
          [action.collection]: action.images
        })
      })

    default:
      return state;
  }
}

function images(state = initialState, action) {
  switch(action.type) {
    case 'REQUEST_IMAGE_COLLECTION':
    case 'RECEIVE_IMAGE_COLLECTION':
      return imageCollection(state, action)
    default:
      return state
  }
}

export default images
