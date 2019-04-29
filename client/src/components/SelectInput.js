import OptionInput from './OptionInput';
import React from 'react';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.selectOptions[Object.keys(this.props.selectOptions)[0]]};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  createOptionInputs() {
    let optionInputs = [];

    {Object.entries(this.props.selectOptions).forEach(([key, value])=> {
      optionInputs.push(<OptionInput key={key} value={value}>{key}</OptionInput>);
    })}

    return optionInputs;
  }

  render() {
		return (
      <select id={this.props.id} onChange={this.handleChange}>
        {this.createOptionInputs()}
      </select>
    );
	}
}

export default SelectInput;
