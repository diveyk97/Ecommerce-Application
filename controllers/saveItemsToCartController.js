var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function saveItemsToCart(req, res) {
    console.log("in  saveItemToCart controller");
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            console.log("in  saveItemToCart controller 1 err");
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("Cart", (err, coll) => {
                if (err) {
                    console.log("in  saveItemToCart controller 2 err");
                    res.status(500);
                    res.json({ message: "Not able to connect to the collection" });
                } else {
                    var datacoming = req.body;
                    productArr = datacoming.productArr;
                    coll.deleteMany({ username: datacoming.username }, (err1, result1) => {
                        if (err1) {
                            console.log("in  saveItemToCart controller 3 err");
                            res.status(500);
                            res.json({ message: "Not able to delete in collection" });
                        } else {
                            res.json({ message: true });
                            for (var i = 0; i < productArr.length; i++) {
                                var productToBeInserted = productArr[i];
                                coll.insertOne({ quantity: productToBeInserted.quantity, username: productToBeInserted.username, size: productToBeInserted.size, pid: productToBeInserted.pid, imgurl: productToBeInserted.imgurl, pname: productToBeInserted.pname, type: productToBeInserted.type, price: productToBeInserted.price, brand: productToBeInserted.brand }, (err, result) => {
                                    if (err) {
                                        console.log("in  saveItemToCart controller 4 err");
                                        res.status(500);
                                        res.json({ message: err })
                                    } else {
                                        console.log("success here in saving to database");
                                        // res.json({ message: true })
                                    }
                                })
                            }
                        }
                    })


                }

            })

        }
    })
}
module.exports = { saveItemsToCart };