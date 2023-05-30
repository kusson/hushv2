import React from 'react'
import "@styles/services.css"
import Image from 'next/image';
import ServiceList from '@app/services/servicelist';
import ServiceItems from '@app/services/serviceitems';

const ServiceHerocard = (props) => {
    
    return (

        
        <div className="serviceDetails">

            {/* Generates the image of the herocard section */}
            <Image className="heroimg" src={props.img} width="300" height="300" alt="image" id={props.class}/>

            {/* Generates the herocontent */}
            <div className={props.class}>
                <div className="namePrice">
                    <h2>{props.servicetitle}</h2>
                    <h3>{props.pricing}</h3>
                </div>

                <hr/>

                <ul className="serviceList">
                    {/* This component generates the list of services. It uses key from ServiceOptions that correlates to the index of objects in array in ServiceItems*/}
                    <ServiceList 
                        item1 = {ServiceItems[props.servicelistid].item1}
                        item2 = {ServiceItems[props.servicelistid].item2}
                        item3 = {ServiceItems[props.servicelistid].item3}
                        item4 = {ServiceItems[props.servicelistid].item4}
                    />
                </ul>                    
            </div>
        </div>
    )

}

export default ServiceHerocard;

//