import { connect } from 'react-redux'
import AppCanvas from '../components/AppCanvas'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    activeApp: state.activeApp
  }
}

const AppCanvasLoader = connect(
  mapStateToProps,
  null
)(AppCanvas)

export default AppCanvasLoader