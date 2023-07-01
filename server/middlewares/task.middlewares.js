const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerificationForTask = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        // errors faced here: Error: Can't set headers after they are sent. Solution: particular error occurs whenever you try to send more than one response to the same request
        req.user = user;
        next();
      } else {
        return res.json({ status: false });
      }
    }
  });
};
