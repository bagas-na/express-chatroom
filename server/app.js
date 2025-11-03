// Import konstanta environment
const PORT = require("./config");

// Import dan definiskan aplikasi utama dari express.js
const express = require("express");
const app = express();

// Import middleware library
const cors = require("cors");
const morgan = require("morgan");

// Masukkan middleware ke dalam aplikasi express
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send("Hello World!");
})

// Untuk static file yang ada pada folder public (termasuk front-end)
app.use(express.static("public"));


// Error 404 untuk URL yang tidak valid
app.use((req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
})


// Handler untuk error lainnya
app.use((error, req, res, next) => {
  next(error)
})

// Start server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
