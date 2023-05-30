import React from 'react'
import "@styles/booking.css";

//localhost:3000/booking

const Booking = () => {
  return (
    <div className="bookingContainer">
    <h1>Book your service today</h1>
    <form>
      <h2>Name:</h2>
      <input></input>
      <h2>Number:</h2>
      <input></input>
      <h2>email:</h2>
      <input></input>
    </form>
    </div>
  )
}

export default Booking;