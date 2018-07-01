import React from 'react';
import '../../../assets/scss/app/app-canvas.scss';

// figure out why this.props.activeApp is empty

class AppCanvas extends React.Component {
	render() {
    console.log("hi: ", this);
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