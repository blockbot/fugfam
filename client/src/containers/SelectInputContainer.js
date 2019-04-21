import { connect } from 'react-redux'
import SelectInput from '../components/SelectInput'
import { getImageCollection } from '../actions/osActions'

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("own props: ", ownProps);


  // need to figure out how to send the selected option value through as an action



  return {
    onSelect: () => {
      dispatch(getImageCollection(ownProps.value));
    }
  }
}

const SelectInputContainer = connect(
  null,
  mapDispatchToProps
)(SelectInput)

export default SelectInputContainer
