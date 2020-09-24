var express = require("express");

var router = express.Router();

var getAllItemsForCartController = require("../controllers/getAllItemsForCartController");
//console.log("here in userroute");
router.post("/", getAllItemsForCartController.getAllItemsForCart);

module.exports = router;