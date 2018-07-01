import AppIconContainer from '../containers/AppIconContainer.js';
import React from 'react';
import '../../../assets/scss/app/apps-bar.scss';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<nav id="app-icons">
					<AppIconContainer onClick={() => console.log("click image")} classes={'images'} appName='Image' />
					<AppIconContainer onClick={() => console.log("click video")} classes={'videos'} appName='Video' />
					<AppIconContainer onClick={() => console.log("click news")} classes={'news'} appName='News' />
				</nav>
			</div>
		);
	}
}

export default AppsBar;