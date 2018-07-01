import React from 'react';

class AppIcon extends React.Component {
  render() {
		return (
      <div className={"app-icon " + this.props.classes}
           appname={this.props.appName}    
           onClick={e => {
             e.preventDefault()
             onAppIconClick()
           }}
      >
        <span></span>
      </div>
    );
	}
}

export default AppIcon;