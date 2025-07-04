const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing another document
      required: true,
      ref: "User", // Reference to the User model
    },
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
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

module.exports = mongoose.model("Task", taskSchema);
