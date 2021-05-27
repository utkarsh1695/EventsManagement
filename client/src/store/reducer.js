import { CREATE_USER_ACTION, LOGIN_ACTION } from "./actionTypes";

const INITIAL_STATE = {
  // Auth
  auth: null,

  // Events
  // ...

  // Bookings
  // ...
};

const rootReducer = (state = INITIAL_STATE, { type, payload }) => {
  let newState;
  switch (type) {
    // Auth
    case LOGIN_ACTION:
    case CREATE_USER_ACTION:
      newState = { ...state, auth: { ...state.auth, ...payload } };
      break;

    // Events
    // ...

    // Bookings
    // ...

    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default rootReducer;
