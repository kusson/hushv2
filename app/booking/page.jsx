"use client"

import React, {useState} from "react";
import "@styles/booking.css";

//localhost:3000/booking

const Booking = () => {

  let [username, setUsername] = useState("");
  let [number, setNumber]  = useState("");
  let [email, setEmail] = useState("");
  let [dropdownSelect, setDropdownSelect] = useState ("");
  let [userText, setUserText] = useState("");

  let formInfo = {
    formName: {setUsername},
    formNumber: {setNumber},
    formEmail: {setEmail},
    formDrop: {setDropdownSelect},
    formText: {setUserText},
  }
  
  function handleForm() {
      console.log(formInfo)
  }


  return (
    <div className="bookingContainer">
      <h1>Book your service today</h1>

      <form className="bookingForm" method="post" onSubmit={handleForm}>
        
        <div className="formField">
          <label>Name: </label>
          <input type="text" id="name" name="name" placeholder="Name" defaultValue={username}
          onChange={e => setUsername=(e.target.value)}></input>
        </div>

        <div className="formField">
          <label>Number: </label>
          <input type="text" id="number" name="number" placeholder="Number" value={number}
          onChange={e => setNumber(e.target.value)}></input>
        </div>

        <div className="formField">
          <label>email: </label>
          <input type="email" id="email" name="email" placeholder="email" value={email}
          onChange={e => setEmail(e.target.value)}></input>
        </div>

        <div className="serviceDropDown">
          <label>Choose a service: </label>
          <select name="serviceSelection" id="serviceSelection" value={dropdownSelect} onChange={e => setDropdownSelect(e.target.value)}>
            <option value="thecaress">The Caress</option>
            <option value="themeticulous">The Meticulous</option>
            <option value="theoverhaul">The Overhaul</option>
            <option disabled={true} defaultValue={true}>--------------</option>
            <option value="wheelbuild">Wheel Building</option>
            <option value="frameprotect">Frame Protection</option>
            <option value="pedals">Pedals Service</option>
            <option value="other">Other (Please specify)</option>
          </select> 
        </div>

        <textarea className="serviceText" name="userText" id="userText" placeholder="Please enter your request here." defaultValue={userText}
        onSubmit={e => setUserText(e.target.value)}></textarea>

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default Booking;