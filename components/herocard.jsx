import React from 'react'
import Image from 'next/image';
import ServiceList from '@app/services/servicelist';
import ServiceItems from '@app/services/serviceitems';
import ServiceOptions from '@app/services/serviceoptions';

const Herocard = (props) => {

    function createServiceList(ServiceItems) {
    
        return(
            <ServiceList 
                key={ServiceItems.key}
                item1={ServiceItems.item1}
                item2={ServiceItems.item2}
                item3={ServiceItems.item3}
                item4={ServiceItems.item4}
            />
        )
    }
    
    return (
        <div className="herocard">
            <Image className="heroimg" src={props.img} width="300" height="300" alt="image"/>

            <div className="herocontent">
                <h2>{props.servicetitle}</h2>
                <h2>{props.pricing}</h2>
                <ul>
                    <ServiceList 
                        item1 = {ServiceItems[props.servicelistid].item1}
                        item2 = {ServiceItems[props.servicelistid].item2}
                        item3 = {ServiceItems[props.servicelistid].item3}
                        item4 = {ServiceItems[props.servicelistid].item4}
                    />
                </ul>
                <hr />
                    
            </div>
        </div>
    )

}

export default Herocard;