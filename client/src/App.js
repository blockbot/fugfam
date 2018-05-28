import React from 'react';
import AppsBar from './AppsBar.js';
import '../../assets/scss/app/app.scss';

function AppMarkup() {
	return(
		<AppsBar />
	);
}

class App extends React.Component {
	render() {
		return <AppMarkup />;
	}
}

export default App;