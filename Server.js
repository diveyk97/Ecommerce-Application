var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var userRoute = require("./routes/userRoute");
var userRegisterRoute = require("./routes/userRegisterRoute");
var getAllItemsForCartRoute = require("./routes/getAllItemsForCartRoute");
var getAllShirtsRoute = require("./routes/getAllShirtsRoute");
var addToCartRoute = require('./routes/addToCartRoute');
var saveItemsToCartRoute = require('./routes/saveItemsToCartRoute');
var SaveToOrderHistoryRoute = require('./routes/SaveToOrderHistoryRoute');
var deleteFromCartRoute = require('./routes/deleteFromCartRoute');
var getOrderHistoryRoute = require('./routes/getOrderHistoryRoute');
var deleteProductForAdminRoute = require('./routes/deleteProductForAdminRoute');
var addNewProductForAdminRoute = require('./routes/addNewProductForAdminRoute');
var PORT = 3000;
const path = require('path') ;

var app = express();
app.use(express.static(path.join(__dirname, "public", "dist", "Ecommerce")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// console.log("in mainServer");
app.use("/api/login", userRoute);
app.use("/api/userRegister", userRegisterRoute);
app.use("/api/getAllItemsForCart", getAllItemsForCartRoute);
app.use("/api/getAllShirts", getAllShirtsRoute);
app.use("/api/addToCart", addToCartRoute);
app.use("/api/saveItemsToCart", saveItemsToCartRoute);
app.use("/api/SaveToOrderHistory", SaveToOrderHistoryRoute);
app.use("/api/deleteFromCart", deleteFromCartRoute);
app.use("/api/getOrderHistory", getOrderHistoryRoute);
app.use("/api/deleteProductForAdmin", deleteProductForAdminRoute);
app.use("/api/addNewProductForAdmin", addNewProductForAdminRoute);

app.listen(PORT, (err) => {
    if (!err)

        console.log(`server is running at PORT ${PORT}`)

})