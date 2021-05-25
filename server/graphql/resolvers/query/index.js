const { getBookings } = require('../../../mongodb/services/bookingService');
const { getEvents } = require('../../../mongodb/services/eventService');
const { loginUser } = require('../../../mongodb/services/userService');

const queryResolvers = {
  login: args => loginUser(args.email, args.password),
  bookings: getBookings,
  events: getEvents,
};

module.exports = queryResolvers;
