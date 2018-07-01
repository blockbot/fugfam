const initialState = {
  activeApp: "HOME_APP",
  tabbedApps: []
}

function appLoader(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_APP':
      return Object.assign({}, state, {
        activeApp: action.app,
        tabbedApps: [
          state.activeApp,
          ...state.tabbedApps
        ]
      });
    default:
      return state;
  }
  
}

export default appLoader;