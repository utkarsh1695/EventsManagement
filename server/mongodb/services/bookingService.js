const Event = require("../models/Event");
const User = require("../models/User");
const Booking = require("../models/Booking");
const { eventEntityToData, bookingEntityToData } = require("./utilities");

const getBookings = async (userId) => {
  try {
    const bookings = await Booking.find({ user: userId });
    const list = bookings.map(bookingEntityToData);
    return list;
  } catch (err) {
    throw err;
  }
};

const bookEvent = async (eventId, userId) => {
  const event = await Event.findById(eventId);
  const user = await User.findById(userId);

  if (!user) throw new Error("User not found!");
  if (!event) throw new Error("Event not found!");

  const booking = new Booking({
    event,
    user,
  });
  await booking.save();
  return bookingEntityToData(booking);
};

const cancelBooking = async (bookingId) => {
  try {
    const booking = await Booking.findById(bookingId).populate("event");
    await Booking.deleteOne({ _id: bookingId });

    return eventEntityToData(booking.event);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getBookings,
  bookEvent,
  cancelBooking,
};
