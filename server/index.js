const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { BACKEND_SERVICE_PORT, MONGO_CONNECTION_STRING } = require("config");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const auth = require("./middlewares/auth");

const server = express();

server.use(
  cors({
    credentials: true,
    origin: (origin, cb) => cb(null, true),
  })
);

server.use(express.json());

server.use(auth);

server.use(
  "/api",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

mongoose
  .connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("---- Mongo Connection Established ----");
    server.listen(BACKEND_SERVICE_PORT, () => {
      console.log(
        `Backend Service running at http://localhost:${BACKEND_SERVICE_PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("---- Error in Mongo Connection ----");
    throw err;
  });
