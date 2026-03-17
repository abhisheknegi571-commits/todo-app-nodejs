import express from "express";
import { isLoggedIn } from '../middleware/authMiddleware.js';

import {
  addTask,
  completeTask,
  deleteTask,
  getAllTasks,
  priorityTask,
  searchTasks,
  showAddForm,
  showUpdateForm,
  updateTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/add",isLoggedIn, showAddForm);
router.post("/add", isLoggedIn, addTask);
router.get("/update/:id", isLoggedIn, showUpdateForm);
router.post("/update/:id", isLoggedIn, updateTask);
router.get("/delete/:id", isLoggedIn, deleteTask);
router.get("/search", isLoggedIn, searchTasks);
router.get("/complete/:id", completeTask);
router.get("/priority/:level", priorityTask);

export default router;
