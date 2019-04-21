import AppIconContainer from '../containers/AppIconContainer.js';
import React from 'react';
import '../../../assets/scss/app/apps-bar.scss';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<nav id="app-icons">
					{this.props.appIconLabels.map((icon) => (
						<AppIconContainer key={`${icon.toLowerCase()}-app-icon`} classes={`${icon.toLowerCase()}-app-icon`} appName={icon} />
					))}
				</nav>
			</div>
		);
	}
}

export default AppsBar;
