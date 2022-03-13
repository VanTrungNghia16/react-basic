import React from "react";
import {connect} from "react-redux";


class Home extends React.Component {
  render() {
    console.log(">>> Check props:", this.props);
    return <div>Hello world Homepage with React.js</div>;
  }
}

export default  Home;
