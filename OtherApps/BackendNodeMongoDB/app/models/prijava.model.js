const mongoose = require('mongoose');

const prijavaModel = new mongoose.Schema( {
    name: String,
    lastName:String,
    phone:String,
    email:String,
    sports:String
})
module.exports = prijavaModel