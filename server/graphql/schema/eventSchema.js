const eventSchema = `
  type Event {
    _id: ID!
    name: String!
    description: String!
    price: Float!
    date: String!
    createdBy: User!
  }

  input EventInput {
    name: String!
    description: String!
    price: Float!
    date: String!
  }
`;

module.exports = eventSchema;
