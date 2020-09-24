var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function addNewProductForAdmin(req, res) {
    mongoClient.connect(mongodbUrl, { useUnifiedTopology: true }, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Error connecting to the mongodb server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("AllProducts", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Error connecting to the mongodb server" });
                } else {
                    var documentToBeInserted = req.body;
                    coll.insertOne({
                        pid: documentToBeInserted.id,
                        pname: documentToBeInserted.name,
                        size: "small",
                        brand: documentToBeInserted.brand,
                        quantity: 1,
                        price: parseInt(documentToBeInserted.price),
                        type: documentToBeInserted.type,
                        imgurl: documentToBeInserted.image,
                        disurl1: documentToBeInserted.imagea,
                        disurl2: documentToBeInserted.imageb
                    }, (err, res1) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: "Error connecting to the mongodb server" });
                        } else {
                            if (res1)
                                res.json({ message: true });
                            else res.json({ message: false });
                        }
                    })
                }


            })
        }

    })
}
module.exports = { addNewProductForAdmin };