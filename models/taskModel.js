const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a task title"],
    },
    description: {
      type: String,
      required: [true, "Please add a task description"],
    },
    priority: {
      type: String,
      required: [true, "Please add a task priority"],
      enum: ["low", "medium", "high"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
