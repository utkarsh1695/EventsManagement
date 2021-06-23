import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Modal } from "../../components";
import { createEvent, getEvents } from "../../services";
import { createEventAction, getEventsAction } from "../../store/actions";
import style from "./index.module.scss";

function Events() {
  const dispatch = useDispatch();
  const { auth, events } = useSelector((state) => state, shallowEqual);

  const [modal, setModal] = useState(false);

  const titleEl = useRef();
  const priceEl = useRef();
  const dateEl = useRef();
  const descriptionEl = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const response = await getEvents();
    dispatch(getEventsAction(response));
  };

  const showModal = () => setModal(true);
  const cancelModalHandler = () => setModal(false);

  const confirmModalHandler = async () => {
    const title = titleEl.current.value.trim();
    const price = +priceEl.current.value.trim();
    const date = dateEl.current.value.trim();
    const description = descriptionEl.current.value.trim();

    if (!title || price <= 0 || !date || !description) return;

    const response = await createEvent({
      title,
      price,
      date,
      description,
      token: auth.token,
    });
    dispatch(createEventAction(response));
    setModal(false);
  };

  return (
    <div className={style.container}>
      {auth?.token && (
        <div className={style.createEventCtaContainer}>
          <button className="btn btn__primary" onClick={showModal}>
            Create Event
          </button>
        </div>
      )}
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
      {modal && (
        <Modal
          title="Create New Event"
          onCancel={cancelModalHandler}
          onConfirm={confirmModalHandler}
        >
          <form>
            <div className="formControl">
              <label htmlFor="__event-title__">Title</label>
              <input id="__event-title__" type="text" ref={titleEl} />
            </div>
            <div className="formControl">
              <label htmlFor="__event-price__">Price</label>
              <input id="__event-price__" type="number" ref={priceEl} />
            </div>
            <div className="formControl">
              <label htmlFor="__event-date__">Date</label>
              <input id="__event-date__" type="date" ref={dateEl} />
            </div>
            <div className="formControl">
              <label htmlFor="__event-description__">Description</label>
              <textarea id="__event-description__" ref={descriptionEl} />
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Events;
