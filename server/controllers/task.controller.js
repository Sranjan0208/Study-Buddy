const Task = require("../models/TaskModel");

// Get all tasks
module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id }); // Only allow getting tasks that belong to the authenticated user
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// Create a new task
module.exports.addTask = async (req, res) => {
  try {
    const { title, column } = req.body;

    const newTask = new Task({
      title,
      column,
      userId: req.user._id,
    });

    const createdTask = await newTask.save();
    return res.status(201).json(createdTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
};

// Update a task
module.exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, column } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: taskId, userId: req.user.id }, // Only allow updating tasks that belong to the authenticated user
      { title, column },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(updatedTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete a task
module.exports.deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    const deletedTask = await Task.findOneAndDelete({
      _id: taskId,
      userId: req.user.id, // Only allow deleting tasks that belong to the authenticated user
    });

    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
