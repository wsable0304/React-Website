import React from 'react';
import {serviceList} from '../helper/serviceList';
import ServiceItem from '../components/serviceItem'
import'../styles/service.css';

function service() {
    return (
        <div className="service">
      <h1 className="serviceTitle">Our Services </h1>
      <div className="serviceList">
        {serviceList.map((serviceItem,key) => {
          return(
            <ServiceItem
            key = {key}
               name ={serviceItem.name}
               image = {serviceItem.image}
               />
             
            
             
            
            
          );
        })}
      </div>
    </div>
    )
}

export default service;
