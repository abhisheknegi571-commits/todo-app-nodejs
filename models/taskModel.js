import mongoose from "mongoose";

//Schema
const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: String,
    status: {
      type: String,
      default: "pending",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);
//model
export const Task = mongoose.model("task", taskSchema, "to-do");
