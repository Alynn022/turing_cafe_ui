import React, { Component } from 'react';
import apiCalls from '../apiCalls';
import './App.css';
import AllReservations from '../AllReservations';
import Form from '../Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  componentDidMount() {
    apiCalls.getData('reservations') 
      .then(data => {this.setState({reservations: data })
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Form />
          <AllReservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
