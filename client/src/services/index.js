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
  return response.login;
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
  return response.createUser;
};
