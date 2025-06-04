//@desc Get all tasks
//@route GET /api/tasks
//@access Public

const getTasks = (req, res) => {
  res.status(200).json({ message: "Get all tasks" });
};

//@desc Create a task
//@route POST /api/tasks
//@access Public

const createTask = (req, res) => {
  res.status(200).json({ message: "Create a task" });
};

//@desc Get a specific task
//@route GET /api/tasks/:id
//@access Public

const getTask = (req, res) => {
  res.status(200).json({ message: `Get a specific task ${req.params.id}` });
};

//@desc Update a task
//@desc PUT /api/tasks/:id
//@@access Public

const updateTask = (req, res) => {
  res.status(200).json({ message: `Update a task ${req.params.id}` });
};

//@desc Delete a task
//@desc DELETE /api/tasks/:id
//@@access Public

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete a task ${req.params.id}` });
};

module.exports = { getTasks, createTask, getTask, updateTask, deleteTask };
