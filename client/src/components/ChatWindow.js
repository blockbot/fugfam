import React from 'react';
import '../../../assets/scss/app/chat-section.scss';

class ChatWindow extends React.Component {
	render() {
		return (
			<section className={"chat-section " + this.props.classes}>
			</section>
		);
	}
}

export default ChatWindow;
