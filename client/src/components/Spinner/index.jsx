import React from "react";
import style from "./index.module.scss";

function Spinner() {
  return (
    <div className={`${style.container} flex-row flex-center`}>
      <div className={style.dottedSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
