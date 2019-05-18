// import OptionInput from './OptionInput';
import React from 'react';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
  })
}

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        label: Object.keys(this.props.selectOptions)[0],
        value: this.props.selectOptions[Object.keys(this.props.selectOptions)[0]]}
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    console.log(selectedOption);
    this.setState({selectedOption});
    this.props.onChange(selectedOption.value);
  }

  createOptionInputs() {
    let optionInputs = [];

    {Object.entries(this.props.selectOptions).forEach(([label, value])=> {
      optionInputs.push({ value, label });
    })}

    return optionInputs;
  }
  render() {
		const { selectedOption } = this.state;
    console.log(selectedOption);
    return (
      <Select
        defaultValue={selectedOption}
        onChange={this.handleChange}
        options={this.createOptionInputs()}
        styles={customStyles}
      />
    );
	}
}

export default SelectInput;
