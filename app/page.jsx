import React from 'react';
import "@styles/home.css";
import Image from 'next/image';
import logo from "../public/hushlogo_bg.png";


const Home = () => {
  return (
    <div className= "container home">
        <div className="homeTitle">
            <h1>Hush Hush Mechanic</h1>
            <hr />
            <p>Your one-stop-shop for all roady needs</p>
        </div>
    </div>
  )
}

export default Home;