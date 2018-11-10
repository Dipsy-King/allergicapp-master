const express =  require("express");
var app = express.Router();
module.exports = app;

var auth_controller = require('../controllers/auth.js');

app.get("/sign-up", auth_controller.get_registerPage);