const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
});

let clientPromise;

async function connectDB() {
    try {
        if (!global._mongoClientPromise) {
            global._mongoClientPromise = client.connect();
        }
        clientPromise = global._mongoClientPromise;

        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error Connecting to mongoDB: ", error);
        process.exit(1);
    }
}

connectDB();

module.exports = { clientPromise, client };