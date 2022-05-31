import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monters: [
        {name: 'Chayut',},
        {name: 'Tim',},
        {name: 'Gut',},
        {name: 'Marcin',},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
