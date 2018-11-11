import React from 'react';
import '../../../assets/scss/app/app-canvas.scss';

class AppCanvas extends React.Component {
	render() {
		return (
			<div id="app-canvas">
        <nav>
          <button>{this.props.activeApp}</button>
        </nav>

        <section>
          <div id="home-app">
            {this.props.activeApp}
          </div>
        </section>
			</div>
		);
	}
}

export default AppCanvas;
