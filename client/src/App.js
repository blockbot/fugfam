import React from 'react';
import OSBar from './OSBar.js';
import '../../assets/scss/app/app.scss';

function AppMarkup() {
	return(
		<OSBar />
	);
}

class App extends React.Component {
	render() {
		return <AppMarkup />;
	}
}

export default App;