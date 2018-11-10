const express =  require("express");
var app = express.Router();
module.exports = app;

var index_controller = require('../controllers/homepage.js');

app.get("/", index_controller.get_homepage);

app.get("/about", index_controller.get_aboutPage);

app.get("/recipes", index_controller.get_recipesPage);

app.get("/contact", index_controller.get_contactPage);

