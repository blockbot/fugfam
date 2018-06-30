import 'constants/actionTypes.js';
import 'constants/apps.js';

function loadApp(app) {
  return{
    type: LOAD_APP,
    app: app
  }
}