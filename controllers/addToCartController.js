var mongoClient = require("mongodb").MongoClient;
//var mongodbUrl = "mongodb://localhost:27017/";
var mongodbUrl = "mongodb+srv://divey:Divey12345@@cluster0.mwwvx.mongodb.net/Ecommerce?retryWrites=true&w=majority";

function addToCart(req, res) {

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
                    var productToBeInserted = req.body;

                    coll.findOne({ username: productToBeInserted.username, pid: productToBeInserted.pid }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        } else {

                            if (result) {
                                res.status(200);
                                coll.updateOne({ username: productToBeInserted.username, pid: productToBeInserted.pid, size: productToBeInserted.size }, { $inc: { quantity: 1 } }, (err, result) => {
                                    if (err) {
                                        res.status(500);
                                        res.json({ message: err })
                                    } else {
                                        res.json({ message: true })
                                    }
                                })

                            } else {
                                res.status(201);
                                coll.insertOne({ quantity: productToBeInserted.quantity, username: productToBeInserted.username, size: productToBeInserted.size, pid: productToBeInserted.pid, imgurl: productToBeInserted.imgurl, pname: productToBeInserted.pname, type: productToBeInserted.type, price: productToBeInserted.price, brand: productToBeInserted.brand }, (err, result) => {
                                    if (err) {
                                        console.log("error4")
                                        res.status(500);
                                        res.json({ message: err })
                                    } else {
                                        console.log("error5")
                                        res.json({ message: true })
                                    }
                                })

                            }

                        }
                    })


                    // coll.updateOne({ username: ProductToBeAdded.username }, { $push: { product: ProductToBeAdded.product } }, { upsert: true }, (err, result) => {
                    //     if (err) {
                    //         res.status(500);
                    //         res.json({ message: err });
                    //     } else {
                    //         if (result) {

                    //             res.status(200);
                    //             res.json({ message: true });
                    //         } else {
                    //             res.status(201);
                    //             res.json({ message: false });
                    //         }
                    //     }
                    // })



                }

            })

        }
    })
}
module.exports = { addToCart };



// var mongoClient = require("mongodb").MongoClient;
// var mongodbUrl = "mongodb://localhost:27017/";

// console.log("mongocon")

// function addProductToCart(req, res) {
//     mongoClient.connect(mongodbUrl, (err, dbHost) => {
//         if (err) {
//             console.log("error1")
//             res.status(500);
//             res.json({ message: "Not able to connect to server" })
//         }
//         else {
//             var db = dbHost.db("slDbMean");
//             db.collection("cart", (err, coll) => {
//                 if (err) {
//                     console.log("errror2")
//                     res.status(500);
//                     res.json({ message: "Not able to connect to connection" })
//                 }
//                 else {
//                     console.log("error3")
//                     var productToBeInserted = req.body;

//                     coll.findOne({ email: productToBeInserted.email, id: productToBeInserted.id }, (err, result) => {
//                         if (err) {
//                             res.status(500);
//                             res.json({ message: err })
//                         }
//                         else {

//                             if (result) {
//                                 res.status(200);
//                                 coll.updateOne({ email: productToBeInserted.email, id: productToBeInserted.id }, { $inc: { quantity: 1 } }, (err, result) => {
//                                     if (err) {
//                                         res.status(500);
//                                         res.json({ message: err })
//                                     }
//                                     else {
//                                         res.json({ message: true })
//                                     }
//                                 })

//                             }
//                             else {
//                                 res.status(201);
//                                 coll.insertOne({ quantity: productToBeInserted.quantity, email: productToBeInserted.email, size: productToBeInserted.size, id: productToBeInserted.id, image: productToBeInserted.image, name: productToBeInserted.name, type: productToBeInserted.type, price: productToBeInserted.price }, (err, result) => {
//                                     if (err) {
//                                         console.log("error4")
//                                         res.status(500);
//                                         res.json({ message: err })
//                                     }
//                                     else {
//                                         console.log("error5")
//                                         res.json({ message: true })
//                                     }
//                                 })

//                             }

//                         }
//                     })
//                 }
//             })
//         }
//     })
// }


// module.exports = { addProductToCart };