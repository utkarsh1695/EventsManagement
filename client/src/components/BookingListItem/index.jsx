import React from "react";
import style from "./index.module.scss";

function BookingListItem({ booking, cancelBooking }) {
  return (
    <li className={style.container}>
      <h3>
        {booking?.event?.name} -{" "}
        {new Date(booking.createdAt).toLocaleDateString()}
      </h3>
      <button
        className="btn btn__primary"
        onClick={cancelBooking.bind(this, booking._id)}
      >
        Cancel
      </button>
    </li>
  );
}

export default BookingListItem;
