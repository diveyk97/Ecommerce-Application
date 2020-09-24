var express = require("express");

var router = express.Router();

var deleteFromCartRouteController = require("../controllers/deleteFromCartRouteController");
//console.log("here in userroute");
router.post("/", deleteFromCartRouteController.deleteFromCart);

module.exports = router;