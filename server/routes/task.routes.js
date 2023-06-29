const express = require("express");
const router = express.Router();
const {
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { userVerification } = require("../middlewares/auth.middlewares");

router.use(userVerification);

router.post("/", addTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

module.exports = router;
