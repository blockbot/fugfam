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
//         {
//            filename: "url.jpg",
//            lastModified: "2019-01-13T23:35:50.080Z",
//            id: 696969
//         },
//         "etc..."
//       ],
//       digital: [
//         {
//            filename: "url.jpg",
//            lastModified: "2019-01-13T23:35:50.080Z",
//            id: 696969
//         },
//         "etc..."
//       ]
//     },
//     isFetching: false,
//   }
// }

export default combineReducers({
  apps, // apps(state.apps, action);
  images // images(state.images, action)
});
