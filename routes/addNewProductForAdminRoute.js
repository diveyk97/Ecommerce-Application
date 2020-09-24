var express = require("express");

var router = express.Router();

var addNewProductForAdminController = require("../controllers/addNewProductForAdminController");
//console.log("here in userroute");
router.post("/", addNewProductForAdminController.addNewProductForAdmin);

module.exports = router;