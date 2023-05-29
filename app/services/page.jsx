import React from 'react'
import "@styles/services.css";
import ServiceHerocard from '@components/serviceherocard';
import ServiceOptions from './serviceoptions';
import Alacarte from './alacarte';

//localhost:3000/services

const Services = () => {

    function createServiceOptions(ServiceOptions) {
        return (
            <ServiceHerocard 
                key={ServiceOptions.id}
                class={ServiceOptions.class}
                servicetitle={ServiceOptions.servicetitle}
                pricing={ServiceOptions.pricing}
                img={ServiceOptions.img}
                servicelistid={ServiceOptions.servicelistid}
            />
        )
    }    

    return (
    <div className="serviceContainer">
        
        {/* Top service selection bar that brings user to specific part of the page. */}
        <div className="serviceoptions">
            <a href="#thecaress">The Caress</a>
            <div>|</div>
            <a href="#themeticulous">The Meticulous</a>
            <div>|</div>
            <a href="#theoverhaul">The Overhaul</a>
        </div>

        <a href="#serviceMore">To bespoke services...</a>

        {/* This creates the service options and items by using a herocard generator */}
        {ServiceOptions.map(createServiceOptions)}

        <hr/>

        <div className="serviceMore" id="serviceMore">
            <h2 id="serviceMore">Bespoke services</h2>
            <Alacarte />
        </div>

    </div>
    )
}

export default Services