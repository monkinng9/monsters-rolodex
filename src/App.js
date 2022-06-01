import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monters: users}
          },
          () => {
            console.log(this.state);
          },
        ));  
  }

  render() {
    return (
      <div className="App">
      <input 
        className='search-box' 
        type='search' placeholder='Search monster' 
        onChange={(event) => {
          
      }}/>
      {this.state.monters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
        })}
      </div>
    );
  }
}

export default App;
