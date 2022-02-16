import React, { Component } from 'react';
import apiCalls from '../apiCalls';
import './App.css';
import AllReservations from '../AllReservations';
import Form from '../Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      isUpdated: false
    }
  }
  componentDidMount() {
    apiCalls.getData('reservations') 
      .then(data => {
        this.setState({reservations: data, isUpdated: true })
    })
    .catch(() => "sorry something went wrong")
  }
  
  addReservation(newReservation) {
    this.setState ({ reservations: [...this.state.reservations, newReservation], isUpdated: true })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          {this.state.isUpdated === true && <AllReservations reservations={this.state.reservations} />}
        </div>
      </div>
    )
  }
}

export default App;
