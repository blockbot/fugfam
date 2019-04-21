import { connect } from 'react-redux'
import OptionInput from '../components/OptionInput'
import { getImageCollection } from '../actions/osActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectOption: () => {
      dispatch(getImageCollection(ownProps.value));
    }
  }
}

const OptionInputContainer = connect(
  null,
  mapDispatchToProps
)(OptionInput)

export default OptionInputContainer
