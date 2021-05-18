
import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchBox.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value })
  }

  render() {

    const { monsters, searchValue } = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    return (
      <div className='App' >
        <h1>MONSTERS</h1>
        <SearchBox handleChange={this.handleChange} placeholder="search monsters" />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

export default App;
