import React from "react";
import Modal from "../Modal";
import style from "./index.module.scss";

function EventListItem({
  id,
  name,
  price,
  date,
  description,
  isOwner,
  viewDetails = false,
  bookEvent = () => {},
  hideDetails = () => {},
  showDetails = () => {},
}) {
  const confirmModalHandler = () => bookEvent(id);
  const cancelModalHandler = () => hideDetails();

  const dateInString = new Date(date).toLocaleDateString();
  return (
    <li className={style.container}>
      <div className={style.content}>
        <h3>{name}</h3>
        <h4>
          {price} - {dateInString}
        </h4>
      </div>
      <div>
        {isOwner ? (
          <p>You are the owner</p>
        ) : (
          <button className="btn btn__primary" onClick={() => showDetails()}>
            View Details
          </button>
        )}
      </div>
      {viewDetails && (
        <Modal
          confirmText={"Book"}
          title={name}
          onCancel={cancelModalHandler}
          onConfirm={confirmModalHandler}
        >
          <div className={`${style.viewDetails} flex-col flex-center`}>
            <div>
              {price} - {dateInString}
            </div>
            <div>{description}</div>
          </div>
        </Modal>
      )}
    </li>
  );
}

export default EventListItem;
