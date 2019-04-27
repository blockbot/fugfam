import React from 'react';

class Image extends React.Component {
	render() {
		return (
			<img src={this.props.src} width="133" height="100" />
		);
	}
}

export default Image;
