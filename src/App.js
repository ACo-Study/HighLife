import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation, Home, Login, Register } from "./containers/App";

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
