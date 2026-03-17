import { Task } from "../models/taskModel.js";

export const getAllTasks = async (req, res) => {
  try {
    let tasks = [];
    if (req.session.userId) {
      tasks = await Task.find({
        user: req.session.userId,
      }).sort({ createdAt: -1 });
    }
    res.render("list.ejs", { tasks });
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to load tasks.");
    res.redirect("/");
  }
};

export const showAddForm = async (req, res) => {
  try {
    res.render("add.ejs");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to open add task form.");
    res.redirect("/");
  }
};

export const addTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    if (!title || !description) {
      req.flash("error", "All fields required");
      return res.redirect("/add");
    }

    const newTask = new Task({
      title,
      description,
      priority,
      user: req.session.userId,
    });

    await newTask.save();
    req.flash("success", "Task added successfully");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to add task.");
    res.redirect("/add");
  }
};

export const showUpdateForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.render("update.ejs", { task });
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to load task for update.");
    res.redirect("/");
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;
    if (!title || !description) {
      req.flash("error", "Fields cannot be empty");
      return res.redirect("/update/" + req.params.id);
    }

    await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.session.userId,
      },
      {
        title,
        description,
        priority,
      },
    );

    req.flash("success", "Task updated");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to update task.");
    res.redirect("/update/" + req.params.id);
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.session.userId,
    });
    req.flash("success", "Task deleted");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to delete task.");
    res.redirect("/");
  }
};

export const searchTasks = async (req, res) => {
  try {
    const query = req.query.query;

    const tasks = await Task.find({
      user: req.session.userId,
      title: { $regex: query, $options: "i" },
    });

    res.render("list.ejs", { tasks });
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to perform search.");
    res.redirect("/");
  }
};

export const completeTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.session.userId,
    });

    if (!task) {
      req.flash("error", "Task not found.");
      return res.redirect("/");
    }

    task.status = task.status === "pending" ? "completed" : "pending";
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to update task status.");
    res.redirect("/");
  }
};

export const priorityTask = async (req, res) => {
  try {
    const level = req.params.level;
    const tasks = await Task.find({
      user: req.session.userId,
      priority: level,
    });
    res.render("list.ejs", { tasks });
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to load tasks by priority.");
    res.redirect("/");
  }
};
