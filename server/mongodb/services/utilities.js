const DataLoader = require("dataloader");
const Event = require("../models/Event");
const { events } = require("../models/User");
const User = require("../models/User");

/**
 * //************ Data Loaders ************
 */
const eventLoader = new DataLoader((eventIds) => eventsByIds(eventIds));
const userLoader = new DataLoader((userIds) =>
  User.find({ _id: { $in: userIds } })
);

/**
 * //************ Utility Functions ************
 */

const dateToString = (date) => (date ? new Date(date).toISOString() : "");

const eventEntityToData = (event) => ({
  ...event.toJSON(),
  date: dateToString(event.date),
  createdBy: userById.bind(this, event.toJSON().createdBy),
});

const userEntityToData = (user) => ({
  ...user.toJSON(),
  createdEvents: eventLoader.load.bind(this, user.toJSON().createdEvents),
});

const bookingEntityToData = (booking) => ({
  ...booking.toJSON(),
  user: userById.bind(this, booking.toJSON().user),
  event: eventById.bind(this, booking.toJSON().event),
  createdAt: dateToString(booking.createdAt),
  updatedAt: dateToString(booking.updatedAt),
});

/**
 * //************ Utility Services ************
 */

const eventsByIds = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(eventEntityToData);
  } catch (err) {
    throw err;
  }
};

const userById = async (userId) => {
  try {
    const user = await userLoader.load(userId.toString());
    return userEntityToData(user);
  } catch (err) {
    throw err;
  }
};

const eventById = async (eventId) => {
  try {
    const event = await eventLoader.load(eventId);
    return event;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  userById,
  eventById,
  eventEntityToData,
  userEntityToData,
  bookingEntityToData,
};
