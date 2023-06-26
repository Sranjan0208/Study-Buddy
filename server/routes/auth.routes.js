const express = require("express");
const router = express.Router();

const { Signup, Login } = require("../controllers/auth.controllers");
const { userVerification } = require("../middlewares/auth.middlewares");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/dashboard/*", userVerification);

module.exports = router;
