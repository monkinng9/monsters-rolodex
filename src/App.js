import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monters: [
        {
          name: 'Chayut',
          id: '1'
        },
        {name: 'Tim', id: '2'},
        {name: 'Gut', id: '3'},
        {name: 'Marcin', id: '4'},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.monters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
