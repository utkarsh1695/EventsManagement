const Event = require("../models/Event");
const User = require("../models/User");

/**
 * //************ Utility Functions ************
 */

const dateToString = (date) => new Date(date).toISOString();

const eventEntityToData = (event) => ({
  ...event.toJSON(),
  date: dateToString(event.date),
  createdBy: userById.bind(this, event.toJSON().createdBy),
});

const userEntityToData = (user) => ({
  ...user.toJSON(),
  createdEvents: eventsByIds.bind(this, user.toJSON().createdEvents),
});

const bookingEntityToData = (booking) => ({
  ...booking.toJSON(),
  user: userEntityToData(booking.user),
  event: eventEntityToData(booking.event),
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
    const user = await User.findById(userId);
    return userEntityToData(user);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  userById,
  eventEntityToData,
  userEntityToData,
  bookingEntityToData,
};
