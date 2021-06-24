import {
  CREATE_USER_ACTION,
  AUTH_ACTION,
  CREATE_EVENT_ACTION,
  GET_EVENTS_ACTION,
  GET_BOOKINGS_ACTION,
  BOOK_EVENT_ACTION,
} from "./actionTypes";

const INITIAL_STATE = {
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

    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default rootReducer;
