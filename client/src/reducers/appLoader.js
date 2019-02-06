import "@babel/polyfill";

const initialState = {
  activeApp: "Home",
  tabbedApps: []
}

// async function loadComponent(app) {
//   console.log(`Loading ${app} component 8==D`);

//   import(`./${this.props.activeApp}App.js`)
//   .then(component => {
//     return component;
//   })
//   .catch(error => {
//     console.error(`${error}`);
//   });
// };

function appLoader(state = initialState, action) {
  switch(action.type) {
    case 'LOAD_APP':
      return Object.assign({}, state, {
        activeApp: action.app,
        tabbedApps: [
          state.activeApp,
          ...state.tabbedApps
        ],
      });
    default:
      return state;
  }

}

export default appLoader;
