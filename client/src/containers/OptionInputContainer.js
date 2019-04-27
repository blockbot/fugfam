import { connect } from 'react-redux'
import OptionInput from '../components/OptionInput'
import { fetchImageCollection } from '../actions/osActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectOption: () => {
      dispatch(fetchImageCollection(ownProps.value));
    }
  }
}

const OptionInputContainer = connect(
  null,
  mapDispatchToProps
)(OptionInput)

export default OptionInputContainer
