var express = require("express");

var router = express.Router();

var userController = require("../controllers/userControllers");
//console.log("here in userroute");
router.post("/", userController.checkUser);

module.exports = router;