const { getBookings } = require("../../../mongodb/services/bookingService");
const { getEvents } = require("../../../mongodb/services/eventService");
const { loginUser } = require("../../../mongodb/services/userService");

const unauthorised = () => {
  throw new Error("Unauthorised!");
};

const queryResolvers = {
  login: async (args, context) => {
    const response = await loginUser(args.email, args.password);
    return response;
  },
  bookings: async (args, req) => {
    !req.auth && unauthorised();
    const response = await getBookings(req.userId);
    return response;
  },
  events: getEvents,
};

module.exports = queryResolvers;
