import React, { useEffect } from "react";
import style from "./index.module.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { cancelEventBooking, getBookings } from "../../services";
import { cancelBookingAction, getBookingsAction } from "../../store/actions";
import Spinner from "../../components/Spinner";
import BookingListItem from "../../components/BookingListItem";

function Bookings() {
  const dispatch = useDispatch();
  const { bookings, auth } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const response = await getBookings({ token: auth?.token });
    dispatch(getBookingsAction(response));
  };

  const cancelBooking = async (bookingId) => {
    const response = await cancelEventBooking({
      bookingId,
      token: auth?.token,
    });
    if (!response.errors) {
      dispatch(cancelBookingAction(bookingId));
    } else {
      alert("Could not cancel! Please Try Again Later!");
    }
  };

  return (
    <div className={style.container}>
      {!bookings && <Spinner />}
      <ul>
        {bookings?.map((booking) => (
          <BookingListItem
            key={booking._id}
            booking={booking}
            cancelBooking={cancelBooking}
          />
        ))}
      </ul>
    </div>
  );
}

export default Bookings;
