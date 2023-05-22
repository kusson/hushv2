import React from 'react'
import "@styles/services.css";
import Herocard from '@components/herocard';
import ServiceOptions from './serviceoptions';
import ServiceItems from './serviceitems';

//localhost:3000/services

const Services = () => {

    function createServiceOptions(ServiceOptions) {
        return (
            <Herocard 
                key={ServiceOptions.id}
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
            <span>The Meticulous</span>
            <span>|</span>
            <span>The Overhaul</span>
        </div>

        {/* Pricing and service details presented in Herocard style. */}
        <div className="serviceDetails">
            <div className="thecaress" id="thecaress"></div>
            <div className="themeticulous" id="themeticulous"></div>
            <div className="theoverhaul" id="theoverhaul"></div>
        </div>

        {ServiceOptions.map(createServiceOptions)}

    </div>
    )
}

export default Services