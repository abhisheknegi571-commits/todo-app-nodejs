import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const showSignup = (req, res) => {
  try {
    res.render("signup.ejs");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to show signup page.");
    res.redirect("/");
  }
};

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      req.flash("error", "All fields required");
      return res.redirect("/signup");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "Email already exists");
      return res.redirect("/signup");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    req.flash("success", "Account created");
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to create account.");
    res.redirect("/signup");
  }
};

export const showLogin = (req, res) => {
  try {
    res.render("login.ejs");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to show login page.");
    res.redirect("/");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      req.flash("error", "Enter email and password");
      return res.redirect("/login");
    }
    const user = await User.findOne({ email });
    if (!user) {
      req.flash("error", "User not found");
      return res.redirect("/login");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      req.flash("error", "Wrong password");
      return res.redirect("/login");
    }
    req.session.userId = user._id;
    req.session.username = user.name;
    req.flash("success", "Login successful");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to login.");
    res.redirect("/login");
  }
};

export const logoutUser = (req, res) => {
  try {
    req.flash("success", "Logged out successfully");
    req.session.destroy(() => {
      res.redirect("/login");
    });
  } catch (error) {
    console.error(error);
    req.flash("error", "Unable to logout.");
    res.redirect("/");
  }
};
