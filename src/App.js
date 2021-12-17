import axios from "axios";
import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
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

  handleChange = (getSearchInput) => {
    this.setState({ searchField: getSearchInput.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsterName = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    const filteredMonsterEmail = monsters.filter((monster) =>
      monster.email.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsterslist={(filteredMonsterName, filteredMonsterEmail)} />
      </div>
    );
  }
}

export default App;
