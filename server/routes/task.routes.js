const express = require("express");
const router = express.Router();
const {
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { userVerificationForTask } = require("../middlewares/task.middlewares");

router.use(userVerificationForTask);

router.post("/tasks", addTask);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

module.exports = router;
