var express = require("express");

var router = express.Router();

var addToCartController = require("../controllers/addToCartController");
//console.log("here in userroute");
router.post("/", addToCartController.addToCart);

module.exports = router;