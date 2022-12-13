const mongoose = require("mongoose");


const API_URL="mongodb+srv://satyam1516:161996@cluster0.7h6m6vz.mongodb.net/emi_calculator?retryWrites=true&w=majority"
const connection = mongoose.connect(API_URL);

module.exports={
    connection
}
