import AppsBar from './components/AppsBar.js';
import AppCanvas from './components/AppCanvas';
import FugChat from './components/FugChat.js';
import React from 'react';
import '../../assets/scss/app/global.scss';

class App extends React.Component {
	render() {
		return (
			<div id="app-container">
				<AppsBar />
				<AppCanvas />
				<FugChat />
			</div>
		);
	}
}

export default App;