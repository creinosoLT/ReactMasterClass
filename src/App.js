import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name:'Julio', age: 23 },
      { name:'Manu', age: 17 },
      { name:'Leo', age: 45 },
    ]
  }

  siwtchNameHandler = (newName) => {
    // console.log('From Switch Name!');
    this.setState({ persons: [
      { name: newName, age: 23 },
      { name: 'Manu', age: 27 },
      { name: 'Leo', age: 45 },
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({ persons: [
      { name: 'Max', age: 23 },
      { name: event.target.value, age: 27 },
      { name: 'Leo', age: 45 },
    ]});
  }

  render() {
    return (
      <div className="App">
          <h1>Testing!</h1>
          <button onClick={ () => this.siwtchNameHandler('Maximilian!!') }>Switch Name</button>
          <Person
            name={ this.state.persons[0].name }
            age={ this.state.persons[0].age }/>
          <Person
            name={ this.state.persons[1].name }
            age={ this.state.persons[1].age }
            click={ this.siwtchNameHandler.bind(this, 'PIPO') }
            changed={ this.nameChangeHandler }/>
          <Person
            name={ this.state.persons[2].name }
            age={ this.state.persons[2].age }/>
        </div>
      );
    }
  }
  
  export default App;
  
  // state = {
  //   persons: [
  //     { name:'Julio', age: 23 },
  //     { name:'Manu', age: 17 },
  //     { name:'Leo', age: 45 },
  //   ]
  // }

  // siwtchNameHandler = () => {
  //   // console.log('From Switch Name!');
  //   this.setState({ persons: [
  //     { name:'Marcos', age: 23 },
  //     { name:'Manu', age: 27 },
  //     { name:'Leo', age: 45 },
  //   ]})
  // }

  // render()