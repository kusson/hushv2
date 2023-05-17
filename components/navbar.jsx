"use client";

import React from "react";
import "@styles/navbar.css";
import Image from 'next/image';
import logo from "../public/images/hushhushlogo_nobg_white.png"

const Navbar = () => {
    //burger menu toggle
    function burgerToggle() {
        let x = document.getElementById("navlist");
        let l1 = document.getElementById("l1");
        let l2 = document.getElementById("l2");
        let l3 = document.getElementById("l3");

        if (x.className === "navlist") {
            x.className += " responsive";
            l1.className += "cross";
            l2.className += "cross";
            l3.className += "cross";
        } else {
            x.className = "navlist";
            l1.className = "line l1";
            l2.className = "line l2";
            l3.className = "line l3";
        } 
    }


    //navbar for website
  return (
    <nav className="navbar">
                
        {/*navbar logo image*/}
        <a className="navbar-logo" href="#">
             <Image className="logo" src={logo} />
        </a>
    
        {/*navbar link list */}
        <ul className="navlist" id="navlist">
            <li><a href="#"/>Home</li>
            <li><a href="about"/>About</li>
            <li><a href="portfolio"/>Portfolio</li>
            <li><a href="services"/>Services</li>
        </ul>
        {/*burger menu */}
        <div className="burgerMenu" onClick={burgerToggle}>
            <div className="line l1" id="l1"/>
            <div className="line l2" id="l2"/>
            <div className="line l3" id="l3"/>
        </div>
    </nav>
  )
}

export default Navbar;