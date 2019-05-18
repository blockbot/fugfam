import AppsBarContainer from './containers/AppsBarContainer'
import AppCanvasContainer from './containers/AppCanvasContainer'
import FugChat from './components/FugChat.js'
import React from 'react'
import '../../assets/scss/app/global.scss'
import '../../assets/scss/imageApp/image-app.scss'


class App extends React.Component {
	render() {
		return (
			<div id="app-container">
				<AppsBarContainer />
				<AppCanvasContainer activeApp={this.props.activeApp} />
				<FugChat />
			</div>
		);
	}
}

export default App
