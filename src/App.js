import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogBreeds: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://api.thedogapi.com/v1/breeds?api_key=4d455d0d-1bda-4a33-b886-85528b7acf78"
    )
      .then((response) => response.json())
      .then((dogBreeds) => this.setState({ dogBreeds: dogBreeds }));
  }
  render() {
    const { dogBreeds, searchValue } = this.state;
    const filteredDogs = dogBreeds.filter((dog) =>
      dog.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search breed by name..."
          onChange={(e) => {
            this.setState({ searchValue: e.target.value }, () =>
              console.log(this.searchValue)
            );
          }}
        />
        <CardList dogBreeds={filteredDogs} />
      </div>
    );
  }
}

export default App;
