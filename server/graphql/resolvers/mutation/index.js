const {
  bookEvent,
  cancelBooking,
} = require('../../../mongodb/services/bookingService');
const { createEvent } = require('../../../mongodb/services/eventService');
const { createUser } = require('../../../mongodb/services/userService');

const unauthorised = () => {
  throw new Error('Unauthorised!');
};

const mutationResolvers = {
  bookEvent: (args, req) => {
    !req.auth && unauthorised();
    bookEvent(args.eventId, req.userId);
  },
  cancelBooking: (args, req) => {
    !req.auth && unauthorised();
    cancelBooking(args.bookingId);
  },
  createUser: args => createUser(args.userInput),
  createEvent: (args, req) => {
    !req.auth && unauthorised();
    createEvent(args.eventInput, req.userId);
  },
};

module.exports = mutationResolvers;
