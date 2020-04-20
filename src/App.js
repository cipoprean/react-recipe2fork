import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import RecipesPage from "./pages/Recipes";
import SingleRecipePage from "./pages/SingleRecipe";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/recipes" exact component={RecipesPage} />
            <Route path="/recipes/:id" component={SingleRecipePage} />
            <Route path="/default" component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
