import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1>My First React App!</h1>
        <p>welcome ;)</p>
        <Ninjas name="Yusifu" age="25" belt="Black"/>
      </div>
    );
  }
}

export default App;
