var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function deleteFromCart(req, res) {

    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("Cart", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to the collection" });
                } else {
                    var datacoming = req.body;

                    coll.deleteMany({ username: datacoming.username }, (err, res1) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err });
                        } else {
                            if (res1) res.json({ message: true })
                        }
                    })



                }

            })

        }
    })
}
module.exports = { deleteFromCart };