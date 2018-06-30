import AppIcon from './AppIcon.js';
import React from 'react';
import '../../../assets/scss/app/apps-bar.scss';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<nav id="app-icons">
					<AppIcon onClick={() => console.log("click image")} classes={'images'} />
					<AppIcon onClick={() => console.log("click video")} classes={'videos'} />
					<AppIcon onClick={() => console.log("click news")} classes={'news'} />
				</nav>
			</div>
		);
	}
}

export default AppsBar;