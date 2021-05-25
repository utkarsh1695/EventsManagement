const Event = require('../models/Event');
const User = require('../models/User');
const { eventEntityToData } = require('./utilities');

const getEvents = async () => {
  try {
    const events = await Event.find();
    return events.map(eventEntityToData);
  } catch (err) {
    throw err;
  }
};

const createEvent = async (eventInput, userId) => {
  try {
    const { name, description, price, date } = eventInput;

    const event = new Event({
      name,
      description,
      price: +price,
      date: new Date(date),
      createdBy: userId,
    });
    const createdEvent = await event.save();

    existingUser.createdEvents.push(event);
    await existingUser.save();

    return eventEntityToData(createdEvent);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getEvents,
  createEvent,
};
