import axios from "axios";
import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => this.setState({ monsters: response.data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={(getSearchInput) =>
            this.setState({ searchField: getSearchInput.target.value })
          }
        />
        <CardList monsterslist={filteredMonster} />
      </div>
    );
  }
}

export default App;
