import {
  AUTH_ACTION,
  CREATE_USER_ACTION,
  CREATE_EVENT_ACTION,
  GET_EVENTS_ACTION,
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
