import ChatSection from './ChatSection';
import ChatWindow from './ChatWindow';
import React from 'react';
import '../../../assets/scss/app/chat.scss';

class FugChat extends React.Component {
	render() {
		return (
			<div id="fug-chat">
        <ChatSection title="Groups" classes="groups" />
        <ChatSection title="Contacts" classes="contacts" />
        <ChatWindow classes="chat" />
			</div>
		);
	}
}

export default FugChat;