const { clientPromise } = require("../config/mongodb");

const getItems = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("inventaris_db");
        const collection = db.collection("barang");

        const items = await collection.find({}).toArray();
        res.json(items);
    } catch (error) {
        console.error("Error fetching items: ", error)
        res.status(500).send("Server Error!");
    }
};

const createItem = async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("inventaris_db");
        const collection = db.collection("barang");

        const { name, quantity } = req.body
        if (!name || !quantity) {
            return res.status(400).send("All fields are required: name, quantity");
        }

        // objek item
        const item = { name, quantity };

        // syntax untuk menambahkan item ke mongodb
        const result = await collection.insertOne(item)

        // error handling ketika user BERHASIL menginput data
        res.status(201).json({ message: "Item added successfully", data: { ...item, _id: result.insertedId } })
    } catch (error) {
        console.error("Error creating item: ", error)
        res.status(500).send("Server Error");
    }
};

module.exports = {
    getItems, createItem
}