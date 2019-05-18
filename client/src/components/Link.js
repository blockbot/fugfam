import React from 'react';
import '../../../assets/scss/imageApp/links.scss'

class Link extends React.Component {
	render() {
		return (
      <a href={this.props.href} target={this.props.target}>
        {this.props.children}
      </a>
		);
	}
}

export default Link;
