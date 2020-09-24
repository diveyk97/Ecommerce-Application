var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";

var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function registerUser(req, res) {

    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to the server" });
        } else {
            var db = dbHost.db("Ecommerce");
            db.collection("Users", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to the collection" });
                } else {
                    var userToBeAdded = req.body;

                    coll.insertOne({ userName: userToBeAdded.userName, mailId: userToBeAdded.mailId, password: userToBeAdded.password, mobile: userToBeAdded.mobile, type: "user" }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err });
                        } else {
                            if (result) {
                                res.status(200);
                                res.json({ message: true });
                            } else {
                                res.status(201);
                                res.json({ message: false });
                            }
                        }
                    })
                }

            })

        }
    })
}
module.exports = { registerUser };