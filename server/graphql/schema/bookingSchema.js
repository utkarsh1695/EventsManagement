const bookingSchema = `
  type Booking {
    _id: ID!
    user: User!
    event: Event!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = bookingSchema;
