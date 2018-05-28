import AppIcon from './AppIcon.js';
import React from 'react';

class AppsBar extends React.Component {
	render() {
		return (
			<div id="apps-bar">
				<AppIcon classes={'images'} />
				<AppIcon classes={'videos'} />
				<AppIcon classes={'news'} />
			</div>
		);
	}
}

export default AppsBar;