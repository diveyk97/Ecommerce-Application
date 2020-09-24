var express = require("express");

var router = express.Router();

var saveToOrderHistoryController = require("../controllers/SaveToOrderHistoryController");

router.post("/", saveToOrderHistoryController.saveItemsToOrderHistory);

module.exports = router;