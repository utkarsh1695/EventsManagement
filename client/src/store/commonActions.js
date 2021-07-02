import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "./actionTypes";

export const showSnackBarAction = ({ text, status }) => ({
  type: SHOW_SNACKBAR,
  payload: { text, status },
});

export const hideSnackBarAction = () => ({
  type: HIDE_SNACKBAR,
});
