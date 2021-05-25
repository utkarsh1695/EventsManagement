const userSchema = `
  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }

  type Login {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UserInput {
    email: String!
    password: String!
  }
`;

module.exports = userSchema;
