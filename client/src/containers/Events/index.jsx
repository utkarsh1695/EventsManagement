import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Modal } from "../../components";
import EventListItem from "../../components/EventListItem";
import Spinner from "../../components/Spinner";
import { bookEvent, createEvent, getEvents } from "../../services";
import {
  bookEventAction,
  createEventAction,
  getEventsAction,
} from "../../store/actions";
import style from "./index.module.scss";

function Events() {
  const dispatch = useDispatch();
  const { auth, events } = useSelector((state) => state, shallowEqual);

  const [modal, setModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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

  const bookEventCallback = async (eventId) => {
    const response = await bookEvent({ eventId, token: auth?.token });
    dispatch(bookEventAction(response));
    setSelectedEvent(null);
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
      {!events && <Spinner />}
      <ul>
        {events?.map((event) => (
          <EventListItem
            key={event._id}
            id={event._id}
            name={event.name}
            price={event.price}
            date={event.date}
            description={event.description}
            isOwner={event.createdBy._id === auth?.userId}
            bookEvent={bookEventCallback}
            hideDetails={() => setSelectedEvent(null)}
            showDetails={() => setSelectedEvent(event)}
            viewDetails={selectedEvent !== null}
          />
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
