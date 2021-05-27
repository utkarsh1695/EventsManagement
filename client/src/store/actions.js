import { LOGIN_ACTION, CREATE_USER_ACTION } from "./actionTypes";

export const loginAction = (loginResponse) => ({
  type: LOGIN_ACTION,
  payload: loginResponse,
});

export const createUserAction = (createUserResponse) => ({
  type: CREATE_USER_ACTION,
  payload: createUserResponse,
});
