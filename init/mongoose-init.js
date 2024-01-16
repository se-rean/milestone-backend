const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/docility"; // Update with your MongoDB connection string and database name

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
