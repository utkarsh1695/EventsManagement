import React from "react";
import style from "./index.module.scss";

const Modal = ({
  title = "",
  onConfirm = () => {},
  onCancel = () => {},
  children,
}) => {
  return (
    <>
      <div className={style.backdrop} />
      <div className={style.container}>
        <header>
          <h3>{title}</h3>
        </header>
        <div className={style.content}>{children}</div>
        <div className={style.actions}>
          <button className="btn__primary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn__primary" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
