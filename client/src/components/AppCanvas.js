import "@babel/polyfill";
import React from 'react';
import HomeApp from './HomeApp.js';
import '../../../assets/scss/app/app-canvas.scss';

class AppCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeApp: "Home"
    };

    this.activeComponent = HomeApp;
  }

  async componentDidUpdate() {
    if(this.props.activeApp != this.state.activeApp){
      await this.loadComponent(this.props)
    }
  }

  async loadComponent(app) {
    import(`./${this.props.activeApp}App.js`)
    .then(component => {
      this.activeComponent = component.default;

      this.setState({
        activeApp: this.props.activeApp,
      })
    })
    .catch(error => {
      console.error(`${error}`);
    });
  }

	render() {
    const ActiveComponent = this.activeComponent;

    return (
      <div id="app-canvas">
        <nav>
          <button>{this.state.activeApp}</button>
        </nav>

        <section>
          <ActiveComponent />
        </section>
      </div>
    );
	}
}

export default AppCanvas;
