import { combineReducers } from 'redux';
import apps from './apps'
import images from './images';

// store shape
// {
//   apps: {
//     activeApp: "Home".
//     tabbedApps: [
//       "Home",
//       "etc..."
//     ]
//   },
//   images: {
//     activeCollection: "Paintings",
//     collections: {
//       paintings: [
//         "url.jpg",
//         "etc..."
//       ],
//       digital: [
//         "url.jpg",
//         "etc..."
//       ]
//     }
//   }
// }

export default combineReducers({
  apps, // apps(state.apps, action);
  images // images(state.images, action)
});
