import React from "react";
import style from "./index.module.scss";

function EventListItem({ name, price, isOwner }) {
  return (
    <li className={style.container}>
      <div>
        <h3>{name}</h3>
        <h4>{price}</h4>
      </div>
      <div>
        {isOwner ? (
          <p>You are the owner</p>
        ) : (
          <button className="btn btn__primary">View Details</button>
        )}
      </div>
    </li>
  );
}

export default EventListItem;
