const express = require("express");
const router = express.Router();
const {
  addTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controllers/task.controller");
const { userVerificationForTask } = require("../middlewares/task.middlewares");

router.use(userVerificationForTask);

router.get("/tasks", getAllTasks);
router.post("/tasks", addTask);
router.put("/tasks/:taskId", updateTask);
router.delete("/tasks/:taskId", deleteTask);

module.exports = router;
