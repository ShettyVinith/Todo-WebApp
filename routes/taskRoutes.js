const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.route("/").get(getTasks);

router.route("/").post(createTask);

router.route("/:id").get(getTask);

router.route("/:id").put(updateTask);

router.route("/:id").delete(deleteTask);

module.exports = router;
