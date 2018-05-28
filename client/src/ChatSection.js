import React from 'react';
import '../../assets/scss/app/chat-section.scss';

class ChatSection extends React.Component {
	render() {
		return (
			<section className={"chat-section " + this.props.classes}>
        <h2>{this.props.title}</h2>
			</section>
		);
	}
}

export default ChatSection;