const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/design", (req, res, next) => {
  res.render("design");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

router.get("/team", (req, res, next) => {
  res.render("team");
});

router.get("/journal", (req, res, next) => {
  res.render("journal");
});

router.get("/contact", (req, res, next) => {
  res.render("contact");
});

module.exports = router;
