









const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(express.json());  

app.use(express.urlencoded({ extended: true }));   

// const db = require("./app/models");

// db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// require("./app/routes/turorial.routes")(app);

const mongoose = require('mongoose');


async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:8080');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'
kittySchema.methods.speak = function speak() {
  const greeting = this.name
  ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
    console.log(greeting);
};

const Kitten2 = mongoose.model('Kitten', kittySchema);
const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); 
// fluffy.speak();
// const kittens = await Kitten.find();
// console.log(kittens);
// await Kitten.find({ name: /^fluff/ });

// set port, listen for requests
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://njoco:pSVJjBxVVFfRRhwq@soprotterdam.v4bx2oh.mongodb.net/?retryWrites=true&w=majority";
// Connect to your Atlas clustermongodb+srv://njoco:<password>@soprotterdam.v4bx2oh.mongodb.net/
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);