const express = require("express");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // take user email and password
  } catch (e) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    // user email, password, rsvp status, number of guest
    // craete new user in db
  } catch (e) {
    next(e);
  }
});

module.exports = router;
