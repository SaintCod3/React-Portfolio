import React, { Component } from "react";
import Header from "./components/header";
import Navegation from "./components/nav";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Contact from "./components/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Navegation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
