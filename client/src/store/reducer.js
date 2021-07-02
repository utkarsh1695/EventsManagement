import { SNACKBAR_STATUS } from "../constants";
import {
  CREATE_USER_ACTION,
  AUTH_ACTION,
  CREATE_EVENT_ACTION,
  GET_EVENTS_ACTION,
  GET_BOOKINGS_ACTION,
  BOOK_EVENT_ACTION,
  CANCEL_BOOKING_ACTION,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR,
} from "./actionTypes";

const INITIAL_STATE = {
  // Common
  common: {
    snackBar: {
      show: false,
      text: "",
      status: SNACKBAR_STATUS.NEUTRAL,
    },
  },

  // Auth
  auth: null,

  // Events
  events: null,

  // Bookings
  bookings: null,
};

const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newState;
  switch (type) {
    // Common
    case SHOW_SNACKBAR:
      newState = {
        ...state,
        common: {
          ...state.common,
          snackBar: {
            show: true,
            text: payload.text,
            status: payload.status || SNACKBAR_STATUS.NEUTRAL,
          },
        },
      };
      break;
    case HIDE_SNACKBAR:
      newState = {
        ...state,
        common: {
          ...state.common,
          snackBar: { show: false, text: "", status: SNACKBAR_STATUS.NEUTRAL },
        },
      };
      break;

    // Auth
    case AUTH_ACTION:
    case CREATE_USER_ACTION:
      newState = { ...state, auth: { ...state.auth, ...payload } };
      break;

    // Events
    case GET_EVENTS_ACTION:
      newState = { ...state, events: [...payload] };
      break;
    case CREATE_EVENT_ACTION:
      newState = { ...state, events: [...state.events, payload] };
      break;

    // Bookings
    case GET_BOOKINGS_ACTION:
      newState = { ...state, bookings: [...payload] };
      break;
    case BOOK_EVENT_ACTION:
      newState = {
        ...state,
        bookings: [
          ...(state?.bookings?.length > 0 ? state.bookings : []),
          payload,
        ],
      };
      break;
    case CANCEL_BOOKING_ACTION:
      const updatedBookings = state.bookings.filter(
        (booking) => booking._id !== payload.deletedBookingId
      );
      newState = { ...state, bookings: updatedBookings };
      break;

    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default rootReducer;
