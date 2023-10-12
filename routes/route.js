import passport from "passport";
import authUser from "../controlles/passport-config";
const LocalStrategy = require("passport-local").Strategy;
import { register } from "../controlles/controls";
import express from "express";
const router = express.Router();
//=====================
// ROUTES
//=====================

// Define the LocalStrategy and use the custom authUser function
passport.use(new LocalStrategy(authUser));
// to check if session of user is set
const checkLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return res.redirect("/dashboard");
  next();
};
const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

// to log out
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// the main page
router.get("/", checkAuthenticated, (req, res) => {
  res.render("login");
});
// the login page
router.get("/login", (req, res) => {
  res.render("login");
});
// the register page
router.get("/register", checkLoggedIn, (req, res) => {
  res.render("register");
});

// the dashboard page
router.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard");
});

//handle login
router.post(
  "/login",
  checkLoggedIn,
  passport.authenticate("local", {
    successRedirect: "dashboard",
    failureRedirect: "login",
  })
);
// handling register form
router.post("/register", async (req, res) => {
  const status = await register(
    req.body.password,
    req.body.confirm_password,
    req.body.username,
    req.body.email
  );
  if (status.success) {
    return res.redirect("/dashboard");
  } else {
    return res.status(400).json({ message: status.message });
  }
});

module.exports = router;
