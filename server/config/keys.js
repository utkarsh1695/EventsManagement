const fs = require("fs");
const path = require("path");

const privateKey = fs.readFileSync(
  path.resolve(__dirname, "./private.key"),
  "utf-8"
);
const publicKey = fs.readFileSync(
  path.resolve(__dirname, "./public.key"),
  "utf-8"
);

module.exports = {
  privateKey,
  publicKey,
};
