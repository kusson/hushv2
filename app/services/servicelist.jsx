import React from 'react';

const ServiceList = (props) => {

  return (
    <div>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
        <li>{props.item4}</li>
    </div>
  )
}

export default ServiceList;