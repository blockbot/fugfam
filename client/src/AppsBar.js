import AppIcon from './AppIcon.js';
import React from 'react';
import '../../assets/scss/app/apps-bar.scss';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<nav id="app-icons">
					<AppIcon classes={'images'} />
					<AppIcon classes={'videos'} />
					<AppIcon classes={'news'} />
				</nav>
			</div>
		);
	}
}

export default AppsBar;