import AppsBar from './components/AppsBar.js'
import AppCanvasContainer from './containers/AppCanvasContainer'
import FugChat from './components/FugChat.js'
import React from 'react'
import '../../assets/scss/app/global.scss'

class App extends React.Component {
	render() {
		return (
			<div id="app-container">
				<AppsBar />
				<AppCanvasContainer activeApp={this.props.activeApp} />
				<FugChat />
			</div>
		);
	}
}

export default App