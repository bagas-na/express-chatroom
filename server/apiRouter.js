const router = require("express").Router();

router.get("/users", async (req, res, next) => {
  try {
    // TODO: request users dari database
  } catch (error) {
    console.error("error")
    next(error)
  }
})
