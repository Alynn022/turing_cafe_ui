import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      numberOfGuests: 0
    }
  }
  render() {
    return (
      <form> 
        <input type='text' name='name' placeholder='Name'></input>
        <input type='date' name='date' placeholder='Date'></input>
        <input type='text' name='time' placeholder='Time'></input>
        <input type='number' name='numberOfGuests' placeholder='Number Of Guests'></input>
        <button>Make Reservation</button>
      </form>
    )
  }
}



export default Form;