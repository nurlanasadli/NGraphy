import React from "react";

function Phone(props) {
  return (
    <div className="phone">
      <img src={props.image} alt="" />
      <h2>
        {props.marka} ${props.model}
      </h2>
    </div>
  );
}

export default Phone;
