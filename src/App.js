import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //takes the response of the fetch and converts it into a json
      .then(users => this.setState({ monsters: users}));
  }

  render() {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
