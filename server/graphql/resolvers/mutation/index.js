const {
  bookEvent,
  cancelBooking,
} = require("../../../mongodb/services/bookingService");
const { createEvent } = require("../../../mongodb/services/eventService");
const { createUser } = require("../../../mongodb/services/userService");

const unauthorised = () => {
  throw new Error("Unauthorised!");
};

const mutationResolvers = {
  bookEvent: async (args, req) => {
    !req.auth && unauthorised();
    const response = await bookEvent(args.eventId, req.userId);
    return response;
  },
  cancelBooking: async (args, req) => {
    !req.auth && unauthorised();
    const response = await cancelBooking(args.bookingId);
    return response;
  },
  createUser: async (args, context) => {
    const response = await createUser(args.userInput);
    return response;
  },
  createEvent: async (args, req) => {
    !req.auth && unauthorised();
    const response = createEvent(args.eventInput, req.userId);
    return response;
  },
};

module.exports = mutationResolvers;
