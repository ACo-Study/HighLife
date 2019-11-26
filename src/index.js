// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Login, Register } from "./pages";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  rootElement
);

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Navigation, Home, Login, Register } from "./containers/App";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navigation />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/register" component={Register} />
//       </div>
//     </Router>
//   );
// }

// export default App;
