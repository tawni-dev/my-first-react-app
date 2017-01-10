import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 1. Our Data
 * 2. Stuff that happens to our Data
 * 3. Stuff that the renderer does
 */

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cohort: 'Javascript Developers!',
      guests: [
        'Jeremy',
        'Brack',
        'Brett',
        'Pepperoni',
        'Ashleigh'
      ],
      newGuest: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddGuest = this.handleAddGuest.bind(this);
  }

  handleChange(event) {
    this.setState({
      newGuest: event.target.value
    })
  }

  handleAddGuest(e) {
    var newGuestList = this.state.guests;

    newGuestList.push(this.state.newGuest)

    this.setState({
      guests: newGuestList
    });
  }

  render() {

    var guests = this.state.guests.map((guest, i) => {
      return (
        <li key={i}>{guest}</li>
      )
    })


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {this.state.cohort}</h2>
        </div>

        <ul>
          {guests}
        </ul>

        <input
          onChange={this.handleChange}/>
        <button
          onClick={this.handleAddGuest}>Add Guest</button>
      </div>
    );
  }
}

export default App;
