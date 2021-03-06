import React, { Component } from "react";
import "./App.css";

import { Heading } from "./components/heading/heading.component"; 
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/searchbox/searchbox.component"; 

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

  handleSearchValueChange = e => {
	this.setState({ searchValue : e.target.value});
   }
   
  render() {
    const { dogBreeds, searchValue } = this.state;
    const filteredDogs = dogBreeds.filter((dog) =>
      dog.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
	  <Heading />
	  <SearchBox 
	  	placeholder="Search by breed"
		handleSearchValueChange={this.handleSearchValueChange}
	/>
        <CardList dogBreeds={filteredDogs} />
      </div>
    );
  }
}

export default App;
