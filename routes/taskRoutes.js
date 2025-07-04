const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken); // Apply token validation middleware to all routes in this router

router.route("/").get(getTasks);

router.route("/").post(createTask);

router.route("/:id").get(getTask);

router.route("/:id").put(updateTask);

router.route("/:id").delete(deleteTask);

module.exports = router;
