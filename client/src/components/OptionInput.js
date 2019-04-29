import React from 'react';

class OptionInput extends React.Component {
	render() {
		return (
      	<option value={this.props.value}>{this.props.children}</option>
		);
	}
}

export default OptionInput;
