import AppsBar from './AppsBar.js';
import FugChat from './FugChat.js';
import React from 'react';
import '../../assets/scss/app/global.scss';

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<AppsBar />
				<FugChat />
			</div>
		);
	}
}

export default App;