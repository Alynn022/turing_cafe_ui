import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  makeReservation(event) {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' })
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    return (
      <form> 
        <input type='text' value={this.state.name} onChange={event => {this.handleChange(event)}} name='name' placeholder='Name'/>
        <input type='text' value={this.state.date} onChange={event => {this.handleChange(event)}} name='date' placeholder='Date'/>
        <input type='text' value={this.state.time} onChange={event => {this.handleChange(event)}} name='time' placeholder='Time'/>
        <input type='number' value={this.state.number} onChange={event => {this.handleChange(event)}} name='number' placeholder='Number Of Guests'/>
        <button className='reserve-btn' onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}



export default Form;