import OptionInputContainer from '../containers/OptionInputContainer';
import React from 'react';

class SelectInput extends React.Component {
  createOptionInputs() {
    let optionInputs = [];

    {Object.entries(this.props.selectOptions).forEach(([key, value])=> {
      optionInputs.push(<OptionInputContainer key={key} value={value}>{key}</OptionInputContainer>);
    })}

    return optionInputs;
  }

  render() {
		return (
      <select id={this.props.id}>
        {this.createOptionInputs()}
      </select>
    );
	}
}

export default SelectInput;
