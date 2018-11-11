import { connect } from 'react-redux'
import AppCanvas from '../components/AppCanvas'

const mapStateToProps = state => {
  return {
    activeApp: state.appLoader.activeApp
  }
}

const AppCanvasLoader = connect(
  mapStateToProps,
  null
)(AppCanvas)

export default AppCanvasLoader
