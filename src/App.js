import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
    console.log(this.props.msg);
  }
  setSearchText = (e) => this.setState({ searchText: e.target.value });
  render() {
    const filterMonsters = this.state.monsters.filter((monster) => monster.name.toLowerCase().includes(this.state.searchText.toLowerCase()));

    return (
      <div className='App'>
        <SearchBox placeHolder='Search Monsters' handleChange={this.setSearchText}></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
