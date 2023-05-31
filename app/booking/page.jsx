import React from 'react'
import "@styles/booking.css";

//localhost:3000/booking

const Booking = () => {
  return (
    <div className="bookingContainer">
      <h1>Book your service today</h1>

      <form className="bookingForm">
        <div className="formField">
          <label for="name">Name: </label>
          <input type="text" id="name" name="name"></input>
        </div>

        <div className="formField">
          <label>Number: </label>
          <input type="number" id="number" name="number"></input>
        </div>

        <div className="formField">
          <label>email: </label>
          <input type="email" id="email" name="email"></input>
        </div>

        <label for="serviceSelection">Choose a service: </label>
        <select name="serviceSelection" id="serviceSelection">
          <option value="thecaress">The Caress</option>
          <option value="themeticulous">The Meticulous</option>
          <option value="theoverhaul">The Overhaul</option>
          <option disabled="true" selected="true" value="">--------------</option>
          <option value="wheelbuild">Wheel Building</option>
          <option value="frameprotect">Frame Protection</option>
          <option value="pedals">Pedals Service</option>
          <option value="other">Other (Please specify)</option>
        </select> 

        <textarea className="serviceText" placeholder="Please enter your request here."></textarea>

        <input type="submit" value="Submit"/>

      </form>

    </div>
  )
}

export default Booking;