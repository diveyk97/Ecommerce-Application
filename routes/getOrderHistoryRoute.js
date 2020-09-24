var express = require("express");

var router = express.Router();

var getOrderHistoryController = require("../controllers/getOrderHistoryController");
//console.log("here in userroute");
router.post("/", getOrderHistoryController.getOrderHistory);

module.exports = router;