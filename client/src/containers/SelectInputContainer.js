import { connect } from 'react-redux'
import SelectInput from '../components/SelectInput'

const mapStateToProps = state => {
  return {
    value: state.images.activeCollection
  }
}

const SelectInputContainer = connect(
  mapStateToProps
)(SelectInput)

export default SelectInputContainer
