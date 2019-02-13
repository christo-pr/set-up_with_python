import React from 'react';
import './App.scss';
import PokePanel from './components/PokePanel'

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <PokePanel />
      </div>
    )
  }
}

export default App;
