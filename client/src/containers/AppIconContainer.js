import { connect } from 'react-redux'
import AppIcon from '../components/AppIcon'
import { loadApp } from '../actions/osActions'

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
)(AppIcon)

export default AppIconContainer
