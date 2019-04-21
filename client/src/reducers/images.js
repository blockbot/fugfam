import "@babel/polyfill";

const initialState = {
  activeCollection: null,
  collections: {},
}

function getImages(action) {
  console.log("getting images, k: ", action)
// this function needs to check for cached results in store


  return [];
}

function images(state = initialState, action) {
  switch(action.type) {
    case 'GET_IMAGE_COLLECTION':
      return Object.assign({}, state, {
        activeCollection: action.collection,
        collections: Object.assign({}, state.collections, {
          [action.collection]: getImages(action)
        })
      });
    default:
      return state;
  }
}

export default images;
