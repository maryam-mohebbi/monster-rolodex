import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <img
        alt="monsters"
        src={`https://robohash.org/${props.monsterinformation.id}?set=set2&size=180x180`}
      />
      <h3>{props.monsterinformation.name}</h3>
      <p>{props.monsterinformation.email}</p>
    </div>
  );
};
export default Card;
