import React from 'react';

const EnteredInfo = () => {
  return (
    <div className="p-3" style={{backgroundColor: "#1E5555", color: "white"}}>
      <h4>Entered information:</h4><br />
      <h6>Your name: </h6><br />
      <h6>Your age: </h6><br />
      <h6>Your gender: </h6><br />
      <h6>Your destinations: </h6><br />
      <h6>Your dietary restrictions: </h6><br />
      <div className="pl-3 pb-4" style={{lineHeight: 0.5}}>
        <p>**Nuts free : </p>
        <p>**Lactose free : </p>
        <p>**Vegan meal : </p>
      </div>
    </div>
  );
}

export default EnteredInfo;