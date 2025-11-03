require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV || "development";
const SECRET = process.env.SECRET || "d75f35f029d3e9f9e4c7a7d7a3e3a3e3e9e156932c3b88b9a54f70c5"; // random string
const PORT = process.env.PORT || 3000;

module.exports = {
  NODE_ENV,
  SECRET,
  PORT,
}
