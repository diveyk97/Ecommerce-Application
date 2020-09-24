var express = require("express");

var router = express.Router();

var userRegisterController = require("../controllers/userRegisterController");
//console.log("here in userroute");
router.post("/", userRegisterController.registerUser);

module.exports = router;