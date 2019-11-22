import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        {/* {this.props.children} */}
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
