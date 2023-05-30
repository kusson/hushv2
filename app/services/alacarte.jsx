"use client";
import React from 'react';

const Alacarte = () => {

    // function to hide long descriptive text
    function ReadMore(e) {
        // Acquiring the current button's name to identify which button has been pressed.
        let y = e.currentTarget.name;
        // Combining subtext with button number that corresponds to paragraph to be hidden.
        let subsub = ("subtext " + y)
        // Selecting corresponding paragraphs using their Id.
        let x = document.getElementById(subsub);

        // Function to show long text by removing hidden from subtexthidden, or adding hidden to hide long text.
        // Also changes the text of button on click while not affecting other button of the same function.
        if (x.className === "subtext") {
            x.className += "hidden"
            e.currentTarget.textContent="Show More...";
        } else {
            x.className = "subtext"
            e.currentTarget.textContent="Show Less";
        }

    }

  return (
    <div className="bespokeServices">

        <div className="service bikeprotection">
            <h3>Bike frame protection</h3>
            <h3>From $170</h3>
            <p>Just got a new bike and not sure how to protect that paint job? Hush Hush got you covered. Literally.</p>
            
            <button onClick={ReadMore} id="readmorebutton" name={"1"} className="showHideButton">Show More...</button>
            
            <div className="subtexthidden" id="subtext 1">
                <p>Using automotive grade paint protection film (3M Scotchgard Pro Series), you can rest easy knowing that your pride and joy is protected against scratches, paint chips, abbrasions, scuffs, and general wear and tear of the paint job.</p>
                <p>At 0.2mm thick, weighing no more than a butyl inner tube, and crystal clear finish, you won't even notice it's there and can ride thorough sticks and stone without worrying about that paint job.</p>
                <p>Best of all, the wrap itself is self-healing. If there are any scratches or light damage, bring out your hairdryer and it'll be brand new again.</p>
            </div>
        </div>

        <div className="service wheelbuild">
            <h3>Customer Wheel Build</h3>
            <h3>From $150</h3>
            <p>Looking for some new wheels and don't want to spend a fortune? Hush Hush also do custom wheel builds.</p>

            <button onClick={ReadMore} id="readmorebutton" name={"2"} className="showHideButton">Show More...</button>

            <div className="subtexthidden" id="subtext 2">
                <p>Big brand carbon wheels are everywhere, and the ability to customise the look and ride feel is limited.</p>
                <p>Customer wheel builds allow you to tailor your set of wheels to your riding conditions.</p>
                <p>Enjoy long adventurous rides? Hush Hush can build you wheels that'll make the ride more comfortable.</p>
                <p>Looking for stiff and responsive wheels when chasing for that KOM, or when going for that sprint finish? We've got you covered as well.</p>
                <p>You can even customize the color of the spokes and nipples, weight of spokes and spoke count to ensure it's exactly how you wanted.</p>
                <p>* All wheelsets will be built using brass nipples. While this will add ~25g per wheel, it will also ensure they will never corrode and result in costly repairs.</p>
            </div>
        </div>

        <div className="service pedalService">
            <h3>Pedals Service</h3>
            <h3>$60</h3>
            <p>Looking to maximise the efficiency for every watt you put down? What better way to start off with your pedals- the first contact point of your massive outputs?</p>

            <button onClick={ReadMore} id="readmorebutton" name={"3"} className="showHideButton">Show More...</button>

            <div className="subtexthidden" id="subtext 3">
                <p>As the most dynamic part of the three contact points on your bike (pedals, sadddle and handlbar), the pedals definitely takes the most abuse from rider's power delivery as well as the elements.</p> 
                <p>Regular service ensures that there are no play in the pedals (both radially and laterally) and optimizes smoothness when pedalling.</p>
                <p>Not to mention, servicing your pedals cleans out all grit and grime from the pedal bodies and bearings, prolonging the life of your most important contact point on the bike.</p>
            </div>
        </div>

    </div>
  )
}

export default Alacarte;