import express from "express";
import path from "path";
import mongoose from "mongoose";
import taskRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { Task } from "./models/taskModel.js";
import session from "express-session";
import flash from "connect-flash";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//session middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,

    cookie:{
      httpOnly:true,
      secure:false,
      maxAge:1000*60*60*24
    }
  })
);

//flash middleware
app.use(flash());

//form data post request handle karne ke liye
app.use(express.urlencoded({ extended: true }));

//path resolve
const publicPath = path.resolve("public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

//flash messages middleware
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use(async (req, res, next) => {
  res.locals.username = req.session.username;
  if (req.session.userId) {
    res.locals.totalTasks = await Task.countDocuments({
      user: req.session.userId,
    });

    res.locals.completedTasks = await Task.countDocuments({
      user: req.session.userId,

      status: "completed",
    });

    res.locals.pendingTasks = await Task.countDocuments({
      user: req.session.userId,

      status: "pending",
    });
  } else {
    res.locals.totalTasks = 0;

    res.locals.completedTasks = 0;

    res.locals.pendingTasks = 0;
  }

  next();
});

//user route
app.use("/", userRouter);

// protected middleware
app.use((req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.redirect("/login");
  }
});

// task route
app.use("/", taskRouter);

//mongodb connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
