import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const EnteredInfo = props => {
  return (
    <div className="p-3" style={{backgroundColor: "#1E5555", color: "white"}}>
      <h4>Entered information: </h4><br />
      <h6>Your name: {props.firstName} {props.lastName}</h6><br />
      <h6>Your age: {props.age}</h6><br />
      <h6>Your gender: {props.gender}</h6><br />
      <h6>Your destinations: {props.destination}</h6><br />
      <h6>Your dietary restrictions: </h6><br />
      <div className="pl-3 pb-4" style={{lineHeight: 0.5}}>
        <p>**Nuts free : {props.nutsFree ? 'Yes' : 'No'}</p>
        <p>**Lactose free : {props.lactoseFree ? 'Yes' : 'No'}</p>
        <p>**Vegan meal : {props.isVegan ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default EnteredInfo;