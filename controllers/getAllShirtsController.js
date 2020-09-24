var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function getAllShirts(req, res) {
    mongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Error connecting to the mongodb server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("AllProducts", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Error connecting to the collection" });
                } else {
                    var userToBeChecked = req.body;

                    coll.find({ type: userToBeChecked.type }).toArray((err, data) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: "Error finding to the mongodb server" });
                        } else {
                            console.log(data);
                            res.json(data);
                        }


                    })
                }


            })
        }

    })

}

module.exports = { getAllShirts };