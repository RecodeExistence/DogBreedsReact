import React, { Component } from 'react'; 
import './App.css'; 

import { CardList } from './components/card-list/card-list.component';
import  { RandomFact }  from './components/random-fact/random-fact.component';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      dogBreeds: [], 
      fact: ''  
    }
  }
  
  componentDidMount() {
    Promise.all([
      fetch('https://api.thedogapi.com/v1/breeds?api_key=4d455d0d-1bda-4a33-b886-85528b7acf78'),
      fetch(`https://some-random-api.ml/animal/dog`)
    ])
    .then(([res1, res2,]) => (
      {
        res1: res1.json(), 
        res2: res2.json()
      }))
      .then(({res1, res2}) => {
        this.setState({
          dogBreeds: res1, 
          fact: res2
        })
      })
  }
  render() {
    return (
      <div className="App">
      <RandomFact fact={this.state.fact}/>
     	<CardList dogBreeds={this.state.dogBreeds} />
      </div>
    )
  }
}

export default App;  