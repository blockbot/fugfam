import React from 'react';


class AppIcon extends React.Component {
	render() {
		return (
      <div className={"app-icon " + this.props.classes}>
        <span></span>
      </div>
    );
	}
}

export default AppIcon;