const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

//@desc Get all tasks
//@route GET /api/tasks
//@access Private

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user_id: req.user.id });
  res.status(200).json(tasks);
});

//@desc Create a task
//@route POST /api/tasks
//@access Private

const createTask = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { title, description, priority } = req.body;
  if (!title || !description || !priority) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const task = await Task.create({
    title,
    description,
    priority,
    user_id: req.user.id, // Associate the task with the logged-in user
  });
  res.status(201).json(task);
});

//@desc Get a specific task
//@route GET /api/tasks/:id
//@access Private

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }
  res.status(200).json(task);
});

//@desc Update a task
//@desc PUT /api/tasks/:id
//@@access Private

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not authorized to update this task");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // Return the updated document
  });
  res.status(200).json(updatedTask);
});

//@desc Delete a task
//@desc DELETE /api/tasks/:id
//@@access Private

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not authorized to delete this task");
  }

  await Task.deleteOne({ _id: req.params.id });
  res.status(200).json(task);
});

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
