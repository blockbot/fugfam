import React from 'react';

const whichApp = (WrappedComponent, endpoint) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      console.log(`hit endpoint ${endpoint}`);
    }

    render() {
      console.log("render: ", WrappedComponent);

      return <WrappedComponent />;
    }
  }
}

export default whichApp;
