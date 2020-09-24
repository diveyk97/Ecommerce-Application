var express = require("express");

var router = express.Router();

var deleteProductForAdminController = require("../controllers/deleteProductForAdminController");
//console.log("here in userroute");
router.post("/", deleteProductForAdminController.deleteProductForAdmin);

module.exports = router;