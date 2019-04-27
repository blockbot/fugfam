import { Apps } from '../constants/apps'
import AppsBar from '../components/AppsBar'
import { connect } from 'react-redux'

const getAppIconLabels = () => {
  let appIconLabels = []

  Object.entries(Apps).forEach(([key, value])=> {
    appIconLabels.push(value)
  })

  return appIconLabels
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
