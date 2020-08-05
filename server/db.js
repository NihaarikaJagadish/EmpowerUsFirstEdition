const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/', (err) => {
    if(!err){
        console.log("Database Connected!");
    }
    else{
        console.log("Error in databse connection");
    }
});

module.exports = mongoose;