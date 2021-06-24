import { fetch } from "./axiosInstance";

export const login = async ({ email, password }) => {
  const response = await fetch({
    query: `
      query {
        login(email:"${email}", password:"${password}") {
          userId
          token
          tokenExpiration
        }
      }
    `,
  });
  return response?.errors ? response.errors : response.data.login;
};

export const createUser = async ({ email, password }) => {
  const response = await fetch({
    query: `
      mutation {
        createUser(userInput:{email:"${email}", password:"${password}"}) {
          _id
          email
        }
      }
    `,
  });
  return response?.errors ? response.errors : response.data.createUser;
};

export const getEvents = async () => {
  const response = await fetch({
    query: `
      query {
        events {
          _id
          name
          description
          price
          date
          createdBy {
            _id
            email
          }
        }
      }
    `,
  });
  return response?.errors ? response.errors : response.data.events;
};

export const createEvent = async ({
  title,
  description,
  date,
  price,
  token,
}) => {
  const response = await fetch({
    query: `
      mutation {
        createEvent(eventInput:{name:"${title}", description:"${description}", price:${price}, date:"${date}"}) {
          _id
          name
          description
          price
          date
          createdBy {
            _id
            email
          }
        }
      }
    `,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response?.errors ? response.errors : response.data.createEvent;
};

export const getBookings = async () => {
  const response = await fetch({
    query: `
      query {
        bookings {
          _id
          createdAt
          event {
            _id
            name
          }
        }
      }
    `,
  });
  return response?.errors ? response.errors : response.data.bookings;
};

export const bookEvent = async ({ eventId, token }) => {
  const response = await fetch({
    query: `
      mutation {
        bookEvent(eventId: "${eventId}") {
          _id
          createdAt
          updatedAt
        }
      }
    `,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response?.errors ? response.errors : response.data.bookEvent;
};
