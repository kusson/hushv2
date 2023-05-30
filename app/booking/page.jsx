import React from 'react'
import "@styles/booking.css";

//localhost:3000/booking

const Booking = () => {
  return (
    <div className="bookingContainer">
      <h1>Book your service today</h1>

      <form className="bookingForm">
        <div className="formField">
          <label>Name: </label>
          <input></input>
        </div>

        <div className="formField">
          <label>Number: </label>
          <input></input>
        </div>

        <div className="formField">
          <label>email: </label>
          <input></input>
        </div>

        <label for="serviceSelection">Choose a service: </label>
        <select name="serviceSelection" id="serviceSelection">
          <option value="thecaress">The Caress</option>
          <option value="themeticulous">The Meticulous</option>
          <option value="theoverhaul">The Overhaul</option>
          <option disabled="true">--------------</option>
          <option>Wheel Building</option>
        </select> 

      </form>

    </div>
  )
}

export default Booking;