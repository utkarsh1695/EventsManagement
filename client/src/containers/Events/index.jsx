import React from "react";
import { useState } from "react";
import { Modal } from "../../components";
import style from "./index.module.scss";

function Events() {
  const [modal, setModal] = useState(false);

  const showModal = () => setModal(true);
  const cancelModalHandler = () => setModal(false);
  const confirmModalHandler = () => setModal(false);

  return (
    <>
      <div className={style.container}>
        <button className="btn__primary" onClick={showModal}>
          Create Event
        </button>
      </div>
      {modal && (
        <Modal
          title="Create New Event"
          onCancel={cancelModalHandler}
          onConfirm={confirmModalHandler}
        >
          <p>Modal Content</p>
        </Modal>
      )}
    </>
  );
}

export default Events;
