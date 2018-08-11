import AppIconContainer from '../containers/AppIconContainer.js';
import React from 'react';
import '../../../assets/scss/app/apps-bar.scss';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<nav id="app-icons">
					// app icon container goes here
				</nav>
			</div>
		);
	}
}

export default AppsBar;