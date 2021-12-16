import axios from "axios";
import React, { Component } from "react";
import CardList from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ monsters: response.data }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsterslist={this.state.monsters} />
      </div>
    );
  }
}

export default App;
