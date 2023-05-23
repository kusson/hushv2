import React from 'react'
import "@styles/services.css";
import ServiceHerocard from '@components/serviceherocard';
import ServiceOptions from './serviceoptions';

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
            <a href="#thecaress"><span>The Caress</span></a>
            <span>|</span>
            <a href="#themeticulous"><span>The Meticulous</span></a>
            <span>|</span>
            <a href="#theoverhaul"><span>The Overhaul</span></a>
        </div>

        {/* This creates the service options and items by using a herocard generator */}
        {ServiceOptions.map(createServiceOptions)}

    </div>
    )
}

export default Services