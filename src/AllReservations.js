import React from 'react';
import './AllReservations';
import SingleReservation from './SingleReservation';

const AllReservations = ({ reservations }) => {
  const reservationsData = reservations.map(reservation => {
    return (
      <SingleReservation
        id={reservation.id} name={reservation.name} date={reservation.date}
        time={reservation.time} number={reservation.number}
      />  
    )
  })
  return (
    <section className='reservation-card'>
      {reservationsData}
    </section>
  )
}

export default AllReservations;