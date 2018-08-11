import { connect } from 'react-redux'
import AppsBar from '../components/AppsBar'
import { loadApp } from '../actions/osActions'

// get app constants and return list of appicons
// do the following the reduxy way

// import { Apps } from '../constants/apps.js';

// Object.entries(Apps).forEach(([key, value])=> {
//   <AppIconContainer classes={'${value}-app-icon'} appName='`${value}`' />
// });

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAppIconClick: () => {
      dispatch(loadApp(ownProps.appName))
    }
  }
}

const AppIconContainer = connect(
  null,
  mapDispatchToProps
)(AppsBar)

export default AppIconContainer