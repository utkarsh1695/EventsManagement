import React, { useEffect } from "react";
import style from "./index.module.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../services";
import { getBookingsAction } from "../../store/actions";
import Spinner from "../../components/Spinner";

function Bookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const response = await getBookings();
    dispatch(getBookingsAction(response));
  };

  return (
    <div className={style.container}>
      {!bookings && <Spinner />}
      <ul>
        {bookings?.map((booking) => (
          <li>
            {booking?.event?.name} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookings;
