var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function getOrderHistory(req, res) {
    mongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Error connecting to the mongodb server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("OrderHistory", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Error connecting to the mongodb server" });
                } else {
                    username = req.body;
                    coll.find({ username: username.username }).toArray((err, data) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: "Error connecting to the mongodb server" });
                        } else {

                            res.json(data);
                        }
                    })
                }
            })
        }
    })
}
module.exports = { getOrderHistory };