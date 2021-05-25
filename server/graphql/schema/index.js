const { buildSchema } = require('graphql');
const eventSchema = require('./eventSchema');
const userSchema = require('./userSchema');
const bookingSchema = require('./bookingSchema');

const schema = buildSchema(`
  ${userSchema}
  
  ${eventSchema}

  ${bookingSchema}

  type Query {
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String!, password: String!): Login!
  }

  type Mutation {
    createUser(userInput: UserInput): User
    createEvent(eventInput: EventInput): Event
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }
`);

module.exports = schema;
