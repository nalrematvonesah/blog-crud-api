const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectDB() {
  if (db) return db;

  await client.connect();
  db = client.db(); 
  console.log("MongoDB Atlas connected (MongoClient)");

  return db;
}

module.exports = { connectDB };
