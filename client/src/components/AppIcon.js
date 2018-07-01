import React from 'react';

class AppIcon extends React.Component {
  render() {
		return (
      <div className={"app-icon " + this.props.classes}
           appname={this.props.appName}    
           onClick={this.props.onAppIconClick}
      >
        <span></span>
      </div>
    );
	}
}

export default AppIcon;