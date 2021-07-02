import React from "react";
import style from "./index.module.scss";
import { SNACKBAR_STATUS } from "../../constants";

function SnackBar({ text, status = SNACKBAR_STATUS.NEUTRAL }) {
  return <div className={`${style.container} ${style[status]}`}>{text}</div>;
}

export default SnackBar;
