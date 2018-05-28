import React from 'react';
import '../../assets/scss/app/app-canvas.scss';

class AppCanvas extends React.Component {
	render() {
		return (
			<div id="app-canvas">
        <nav>
          <button>Active App</button>
        </nav>

        <section>
          <div id="temp-app">
            <div>
              <img src="icons/magic-wand-white.svg" /><img src="icons/baffled-white.svg" />
            </div>
            Under construction.
          </div>
        </section>
			</div>
		);
	}
}

export default AppCanvas;