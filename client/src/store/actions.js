import {
  AUTH_ACTION,
  CREATE_USER_ACTION,
  CREATE_EVENT_ACTION,
  GET_EVENTS_ACTION,
  GET_BOOKINGS_ACTION,
  BOOK_EVENT_ACTION,
  CANCEL_BOOKING_ACTION,
} from "./actionTypes";

export const authAction = (loginResponse) => ({
  type: AUTH_ACTION,
  payload: loginResponse,
});

export const createUserAction = (createUserResponse) => ({
  type: CREATE_USER_ACTION,
  payload: createUserResponse,
});

export const getEventsAction = (events) => ({
  type: GET_EVENTS_ACTION,
  payload: events,
});

export const createEventAction = (createEventResponse) => ({
  type: CREATE_EVENT_ACTION,
  payload: createEventResponse,
});

export const getBookingsAction = (bookings) => ({
  type: GET_BOOKINGS_ACTION,
  payload: bookings,
});

export const bookEventAction = (bookEventResponse) => ({
  type: BOOK_EVENT_ACTION,
  payload: bookEventResponse,
});

export const cancelBookingAction = (bookingId) => ({
  type: CANCEL_BOOKING_ACTION,
  payload: { deletedBookingId: bookingId },
});
