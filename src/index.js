import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { App } from "./containers/App";
// import { Navigation } from "./components";

import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App />,
  //   <Router>
  //     <div>
  //       <Navigation />
  //       <Route exact path="/" component={App} />
  //       {/* <Route path="/home" component={Home} /> */}
  //     </div>
  //   </Router>,
  rootElement
);
