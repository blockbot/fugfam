import "@babel/polyfill";

const initialState = {
  activeApp: "Home",
  tabbedApps: [],
}

function apps(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_APP':
      return Object.assign({}, state, {
        activeApp: action.app,
        // need to update this to only add if not present
        tabbedApps: [
          state.activeApp,
          ...state.tabbedApps
        ],
      })
    default:
      return state
  }
}

export default apps
