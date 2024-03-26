const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoULR = 'mongodb://localhost:27017/hotels';

// Set up MongoDB connection
mongoose.connect(mongoULR,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
});

// get the default connection
// Mongoose maintains  adefault connection object represting the MongoDB connection
const db = mongoose.connection;


// Define event listener for database connection

db.on('connected',() =>{
    console.log("Connected to mongodb server");
});

db.on('error',(err) =>{
    console.log("MongoDB connection error",err);
});

db.on('disconnected',() =>{
    console.log("DisConnected to mongodb");
});