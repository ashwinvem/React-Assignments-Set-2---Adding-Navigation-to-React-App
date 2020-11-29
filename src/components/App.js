import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import About from "./about";
import Home from "./home";
import LocationDisplay from "./location";
import NoMatch from "./noMatch";
import "../styles/App.css";

function App() {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/no-match" component={NoMatch} />
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
        <Redirect to="/no-match" />
      </Switch>

      <LocationDisplay />
    </div>
  );
}

export default App;
export { LocationDisplay };
