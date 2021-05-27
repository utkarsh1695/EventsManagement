const { getBookings } = require("../../../mongodb/services/bookingService");
const { getEvents } = require("../../../mongodb/services/eventService");
const { loginUser } = require("../../../mongodb/services/userService");

const queryResolvers = {
  login: async (args, context) => {
    const response = await loginUser(args.email, args.password);
    return response;
  },
  bookings: getBookings,
  events: getEvents,
};

module.exports = queryResolvers;
