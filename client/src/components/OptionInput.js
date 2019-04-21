import React from 'react';

class OptionInput extends React.Component {
	render() {
		return (
      <option value={this.props.value} onClick={this.props.onSelectOption}>{this.props.children}</option>
		);
	}
}

export default OptionInput;
