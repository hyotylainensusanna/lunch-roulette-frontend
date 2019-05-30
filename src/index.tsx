import * as React from "react";
import { render } from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Round from "./pages/Round";
import Success from "./pages/Success";

import "./styles.css";
import "./variables.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/round" component={Round} />
      <Route exact path="/success" component={Success} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/logout" component={Logout} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
