var express = require("express");
var router = express.Router();


var getAllShirtsController = require("../controllers/getAllShirtsController");
//console.log("here in userroute");
router.post("/", getAllShirtsController.getAllShirts);

module.exports = router;