import { connect } from 'react-redux'
import AppIcon from '../components/AppIcon'
import appLoader from '../reducers/appLoader'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAppIconClick: () => {
      dispatch(appLoader(ownProps.appName))
    }
  }
}

const AppIconContainer = connect(
  null,
  mapDispatchToProps
)(AppIcon)

export default AppIconContainer