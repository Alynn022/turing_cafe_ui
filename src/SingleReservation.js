import React from 'react';
import './SingleReservation.css'

const SingleReservation = ({ id, date, name, time, number}) => {
  return (
    <section id={id} className='single-reservation'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests:{number}</p>
    </section>

  )
}

export default SingleReservation;