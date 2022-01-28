import React from "react";


function serviceItem({ name, image }) {
  return (
    <div className="serviceItem">
      <h1> {name} </h1>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      
      
    </div>
  );
}

export default serviceItem;