const express = require("express");
const router = express.Router();

const { Signup, Login, Logout } = require("../controllers/auth.controllers");
const { userVerification } = require("../middlewares/auth.middlewares");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/", userVerification);

module.exports = router;
