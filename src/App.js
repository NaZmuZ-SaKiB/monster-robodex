import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).then(users => this.setState({ monsters: users }))
  }

  changeHandle = e => this.setState({ searchField: e.target.value })

  render() {
    const { monsters, searchField } = this.state
    const filterdmonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App" >
        <h1>Monster Robodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          changeHandle={this.changeHandle}
        />
        <CardList monsters={filterdmonsters} />
      </div>
    )
  }
}

export default App;
