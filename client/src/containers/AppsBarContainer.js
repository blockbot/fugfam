import { Apps } from '../constants/apps';
import AppsBar from '../components/AppsBar';
import { connect } from 'react-redux';

// get app constants and return list of appicons
// do the following the reduxy way

// import { Apps } from '../constants/apps.js';

// Object.entries(Apps).forEach(([key, value])=> {
//   <AppIconContainer classes={'${value}-app-icon'} appName='`${value}`' />
// });

const getAppIconLabels = () => {
  let appIconLabels = [];

  Object.entries(Apps).forEach(([key, value])=> {
    appIconLabels.push(value);
  })

  return appIconLabels;
}

const mapStateToProps = () => {
  return{
    appIconLabels: getAppIconLabels()
  }
}

const AppsBarContainer = connect(
  mapStateToProps,
  null
)(AppsBar)

export default AppsBarContainer
