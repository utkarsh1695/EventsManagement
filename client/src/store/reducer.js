import {
  CREATE_USER_ACTION,
  AUTH_ACTION,
  CREATE_EVENT_ACTION,
  GET_EVENTS_ACTION,
} from "./actionTypes";

const INITIAL_STATE = {
  // Auth
  auth: null,

  // Events
  events: [],

  // Bookings
  // ...
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
    // ...

    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default rootReducer;
