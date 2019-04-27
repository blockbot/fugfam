import { connect } from 'react-redux'
import AppCanvas from '../components/AppCanvas'

const mapStateToProps = state => {
  return {
    activeApp: state.apps.activeApp,
  }
}

const AppCanvasLoader = connect(
  mapStateToProps,
  null
)(AppCanvas)

export default AppCanvasLoader
