var express = require("express");

var router = express.Router();

var saveItemsToCartController = require("../controllers/saveItemsToCartController");

router.post("/", saveItemsToCartController.saveItemsToCart);

module.exports = router;