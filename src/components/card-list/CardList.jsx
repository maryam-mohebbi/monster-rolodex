import React from "react";
import "./CardList.css";
import Card from "../card/Card";

const CardList = (props) => {
  return (
    <div className="CardList">
      {props.monsterslist.map((monster) => (
        <Card key={monster.id} monsterinformation={monster} />
      ))}
    </div>
  );
};

export default CardList;
