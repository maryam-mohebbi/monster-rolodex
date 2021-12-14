import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Frankestein", index: "monster1" },
        { name: "Dracula", index: "monster2" },
        { name: "Zombie", index: "monster3" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.index}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
