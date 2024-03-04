const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const axios = require("axios"); // Import Axios library

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true // Optional: allow cookies and HTTP authentication to be sent to the server
};

const url =
  "mongodb+srv://njoco:pSVJjBxVVFfRRhwq@soprotterdam.v4bx2oh.mongodb.net/?retryWrites=true&w=majority";

const nenad = {
  name: "John",
  lastName: "Doe",
  phone: "123456789",
  sports: "Tennis",
};

const app = express();
const client = new MongoClient(url);
const prijaveApi = require("./app/controllers/prijave.controller.js");

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({ extended: true })
);
app.use("/api/prijave", prijaveApi);

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}.`);
});

async function run() {
  try {

    await client.connect().then(console.log("Successfully connected to Atlas"));
    const createPrijava = await axios.post("http://localhost:8080/api/prijave",nenad).then(console.log("Created prijave"));
    await axios.get("http://localhost:8080/api/prijave").then(console.log("Got All"))
    await axios.delete("http://localhost:8080/api/prijave/",createPrijava.id).then(console.log("Deleted prijave"));
    
  } catch (err) {

    console.log(err.stack);

  } finally {

    await client.close();

  }
}

run().catch(console.dir);
