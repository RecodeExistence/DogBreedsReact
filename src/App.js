import React, { Component } from 'react'; 
import './App.css'; 

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      dogBreeds: [], 
      fact: ''  
    }
  }
  
  componentDidMount() {
      fetch('https://api.thedogapi.com/v1/breeds?api_key=4d455d0d-1bda-4a33-b886-85528b7acf78')
	  	.then(response => response.json())
		.then(dogBreeds => this.setState({dogBreeds : dogBreeds}))
  }
  render() {
    return (
      <div className="App">
     	<CardList dogBreeds={this.state.dogBreeds} />
      </div>
    )
  }
}

export default App;  